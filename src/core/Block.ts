import EventBus from "./EventBus.ts";
import Handlebars from "handlebars";

type Events = {
    INIT: string,
    FLOW_CDM: string,
    FLOW_CDU: string,
    FLOW_RENDER: string
};

export default class Block {
    static EVENTS: Events = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    #element: HTMLElement | null = null;
    #meta: object | null = null; // meta - {tag name & props (className etc...)}

    constructor(tagName: string = "div", propsAndChildren: object | null = {}) {
        const eventBus = new EventBus();
        this.#meta = {
            tagName,
            propsAndChildren
        };

        // this.props = this.#makePropsProxy(props);
        const {props, children} = this.#getChildrenAndProps(propsAndChildren);

        this.props = props;
        this.children = children;

        this.eventBus = () => eventBus;

        this.#registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    };

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

    #registerEvents(eventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.#init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
    };

    #createResources(): void {
        const {tagName} = this.#meta;
        this.#element = this.#createDocumentElement(tagName);
    };

    #init() {
        this.#createResources();
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    init(): void {
    };

    #componentDidMount(): void {
        this.componentDidMount();
    };

    componentDidMount(oldProps): void {
    };

    dispatchComponentDidMount(): void {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    };

    #componentDidUpdate(oldProps, newProps): void {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.#render();
    };

    componentDidUpdate(oldProps, newProps): boolean {
        return true;
    };

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this.#element;
    };

    // #render(): void {
    //     const block = this.render();
    //     // Этот небезопасный метод для упрощения логики
    //     // Используйте шаблонизатор из npm или напишите свой безопасный
    //     // Нужно не в строку компилировать (или делать это правильно),
    //     // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    //     this.#element.innerHTML = block;
    //
    // };


    #render(): void {
        const propsAndStubs = { ...this.props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child._id}"></div>`
        });

        const fragment = this.#createDocumentElement('template');

        // if(this.name === 'LoginPage') {
        //     console.log(this.render())
        //     console.log(propsAndStubs)
        // }

        console.log(this.render());
        console.log(propsAndStubs)

        fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);
        // if(this.name === 'LoginPage') {
        //     console.log(fragment.innerHTML)
        //
        // }

        const newElement = fragment.content.firstElementChild;
        //
        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            stub?.replaceWith(child.getContent());
        });
        //
        if (this.#element) {
            this.#element.replaceWith(newElement);
        }

        this.#element = newElement;
        //
        // this.#addEvents();
        //
        // if(this.name === 'LoginPage') {
        //     console.log(newElement.innerHTML)
        //
        // }
    };

    render(): void {
        console.log(this.#element);
    };

    getContent() {
        return this.element;
    };

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
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            }
        });
    };

    #createDocumentElement(tagName) {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    };

    show(): void {
        this.getContent().style.display = "block";
    };

    hide(): void {
        this.getContent().style.display = "none";
    };
};
