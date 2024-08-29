import Block from "../../core/Block";
import Input from "./input";

export default class InputItem extends Block {
    constructor(props) {
        super({
            ...props,
            Input: new Input({
                className: props.className,
                type: props.type,
                name: props.name,
                id: props.id,
                maxLength: props.maxLength,
                events: {
                    blur: props.onBlur || (() => {
                    }),
                    change: props.change || (() => {
                    })
                }
            })
        });
    };

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps === newProps) {
            return false;
        }

        // this.children.ErrorLine.setProps(newProps);
        return true;
    };

    render(): string {
        return `
            <label class="input">
                {{{ Input }}}
                <p class="input__label">{{label}}</p>
                <p class="input__label-error">{{error}}</p>
            </label>
    `
    };

};
