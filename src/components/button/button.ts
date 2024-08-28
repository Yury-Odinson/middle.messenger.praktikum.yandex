import Block from "../../core/Block";

export default class Button extends Block {
    constructor(props) {
        super({
            ...props,
            events: {
                click: props.onClick
            }
        });
    };

    render(): string {
        return `
            <button class="button button__{{className}}"  type="{{type}}">
                {{label}}
            </button>
        `
    };
};
