import Block from "../../core/Block.ts";

export default class Input extends Block {
    constructor(props) {
        super({...props});
    };

    render() {
        return `
                <label class="input">
                    <input
                        name="{{name}}"
                        id="{{id}}"
                        class="input__element {{className}}"
                        placeholder=""
                        type="{{type}}"
                        value="{{defaultValue}}"
                        required
                    />
                    <p class="input__label">{{label}}</p>
                    <p class="input__label-error">{{error}}</p>
                </label>
        `
    };
};
