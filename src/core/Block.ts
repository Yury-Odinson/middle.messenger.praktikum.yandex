import EventBus from "./EventBus";
import {nanoid} from 'nanoid';
import Handlebars from "handlebars";

type TEvents = Values<typeof Block.EVENTS>

export default class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    } as const;

    #element = null;
    #meta = null;
    #id = nanoid(6);


    // private #eventbus;

    constructor(propsWithChildren = {}) {
        const eventBus = new EventBus<TEvents>();
        const {props, children} = this.#getChildrenAndProps(propsWithChildren);
        this.props = this.#makePropsProxy({ ...props });
        this.children = children;
        this.name = "";

        this.eventBus = () => eventBus;

        this.#registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    #addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this.#element.addEventListener(eventName, events[eventName]);
        })
    }

    #registerEvents(eventBus: EventBus<TEvents>) {
        eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
    }

    #init() {
        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    init() {
    }

    #componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount(oldProps) {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    #componentDidUpdate(oldProps, newProps) {
        // console.log('CDU')
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.#render();
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    #getChildrenAndProps(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this.#element;
    }

    #render() {
        const propsAndStubs = { ...this.props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.#id}"></div>`
        });

        const fragment = this.#createDocumentElement('template');

        if(this.name === 'LoginPage') {
            // console.log(this.render())
            // console.log(propsAndStubs)

        }

        fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);
        if(this.name === 'LoginPage') {
            // console.log(fragment.innerHTML)

        }

        const newElement = fragment.content.firstElementChild;

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child.#id}"]`);

            stub?.replaceWith(child.getContent());
        });

        if (this.#element) {
            this.#element.replaceWith(newElement);
        }

        this.#element = newElement;

        this.#addEvents();

        if(this.name === 'LoginPage') {
            // console.log(newElement.innerHTML)

        }
    }

    render() {}

    getContent() {
        // Хак, чтобы вызвать CDM только после добавления в DOM
        if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            setTimeout(() => {
                if (
                    this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
                ) {
                    this.dispatchComponentDidMount();
                }
            }, 100);
        }

        return this.#element;
    }

    #makePropsProxy(props) {
        // Можно и так передать this
        // Такой способ больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = {...target}
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            }
        });
    }

    #createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
