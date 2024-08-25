import EventBus from "./EventBus.ts";

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

    constructor(tagName: string = "div", props: object | null = {}) {
        const eventBus = new EventBus();
        this.#meta = {
            tagName,
            props
        };

        this.props = this.#makePropsProxy(props);

        this.eventBus = () => eventBus;

        this.#registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    };

    #registerEvents(eventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this.#componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.#componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this.#render.bind(this));
    };

    #createResources(): void {
        const {tagName} = this.#meta;
        this.#element = this.#createDocumentElement(tagName);
    };

    init(): void {
        this.#createResources();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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

    #render(): void {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду
        this.#element.innerHTML = block;
    };

    render(): void {
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
