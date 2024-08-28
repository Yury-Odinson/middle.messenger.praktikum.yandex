import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";

export default class LoginPage extends Block {
    constructor(props: object) {
        super("form", {...props});

    };

    init() {
        const InputLogin = new Input({
           name:"login", label:"Логин", type:"text", className:"input__form"
        });
        const InputPassword = new Input({
            name:"password", label:"Пароль", type:"password", className:"input__form"
        });
        const ButtonForgotPassword = new Button({
           label:"Забыли пароль?", className:"forgot-password"
        });
        const ButtonAuth = new Button({
            label:"Авторизоваться", className:"primary"
        });
        const ButtonNoAccount = new Button({
            label:"Нет аккаунта?", className:"secondary"
        });

        this.children = {
            InputLogin,
            InputPassword,
            ButtonForgotPassword,
            ButtonAuth,
            ButtonNoAccount
        };
    };

    render() {
        return `
            <form class="form">
                <div class="form-data">
                    <p class="form-data__title">Вход</p>
                    {{{InputLogin}}}
                    {{{InputPassword}}}
                    {{{ButtonForgotPassword}}}
                </div>

                <div class="form-control">
                    {{{ButtonAuth}}}
                    {{{ButtonNoAccount}}}
                </div>
            </form>`
    };

};
