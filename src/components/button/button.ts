import Block from "../../core/Block";

export default class Button extends Block {
    constructor(props) {
        super("button", {...props});
    };

    render(): string {
        return `
            <button class="button button__{{type}}" >
                {{label}}
            </button>
        `
    };
};
