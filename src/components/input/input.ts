import Block from "../../core/Block.ts";

export default class Input extends Block {

    render() {
        return `
            <input
                name="{{name}}"
                id="{{id}}"
                class="input__element {{className}}"
                placeholder=""
                type="{{type}}"
                maxlength="{{maxLength}}"
                minlength="{{minLength}}"
                required
            />
        `
    };
};
