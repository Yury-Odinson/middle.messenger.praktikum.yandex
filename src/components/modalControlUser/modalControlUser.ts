import Block from "../../core/Block.ts";
import {Input} from "../input";
import {Button} from "../button";

export default class ModalControlUser extends Block {
    constructor(props) {
        super({
            ...props,
            isOpen: props.isOpen,
            isAddUser: props.isAddUser
        });
        // console.log(this.props)
    };

    init() {
        console.log(this.props)

        const inputUser = new Input({
            className: "input__control-user",
            name: "input-control-user",
            type: "text",
            label: "Логин"
        });

        const buttonControl = new Button({
            className: "primary",
            label: this.props.isAddUser ? "Добавить" : "Удалить"
        });

        this.children = {
            inputUser,
            buttonControl
        };
    };

    render() {
        return `
            {{#if isOpen}}
            <div class="modal__background">
                <div class="modal__control-user">
                    <p>
                        {{#if isAddUser}}
                            Добавить пользователя
                        {{else}}
                            Удалить пользователя
                        {{/if}}
                        
                    </p>
                    {{{inputUser}}}
                    {{{buttonControl}}}
                </div>
            </div>
            {{/if}}
        `
    };
};
