import Block from "../../core/Block";

export default class Button extends Block {
    constructor(props) {
        super({...props});
    };

    render(): string {
        return `
            <button class="button button__{{className}}" >
                {{label}}
            </button>
        `
    };
};
