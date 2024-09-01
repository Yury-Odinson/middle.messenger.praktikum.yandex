import Block from "../../core/Block.ts";
import {Input} from "../input";
import {Button} from "../button";

export default class ModalControlUser extends Block {

    init() {
        const inputUser = new Input({
            className: "input__control-user",
            name: "input-control-user",
            type: "text",
            label: "Логин"
        });

        const buttonControl = new Button({
            className: "primary",
            label: this.props.label
        });

        this.children = {
            inputUser,
            buttonControl
        };
    };

    render() {
        return `
<!--            <div class="modal__background">-->
                <div class="modal__control-user">
                    <p>{{labelModalTitle}}</p>
                    {{{inputUser}}}
                    {{{buttonControl}}}
                </div>
<!--            </div>-->
        `
    };
};
