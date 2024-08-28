import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";

export default class LoginPage extends Block {

    init() {
        const onLoginBind = this.onLogin.bind(this);

        const InputLogin = new Input({
           name:"login", label:"Логин", type:"text", className:"input__form", id:"inpLogin"
        });
        const InputPassword = new Input({
            name:"password", label:"Пароль", type:"password", className:"input__form", id:"inpPass"
        });
        const ButtonAuth = new Button({
            label:"Авторизоваться", className:"primary", type: "button", onClick: onLoginBind
        });
        const ButtonNoAccount = new Button({
            label:"Нет аккаунта?", className:"secondary", type: "button"
        });

        this.children = {
            InputLogin,
            InputPassword,
            ButtonAuth,
            ButtonNoAccount
        };
    };

    onLogin() {
        console.log('Login:', this.children.InputLogin);
    };

    render() {
        return `
            <form class="form">
                <div class="form-data">
                    <p class="form-data__title">Вход</p>
                    {{{InputLogin}}}
                    {{{InputPassword}}}
                </div>

                <div class="form-control">
                    {{{ButtonAuth}}}
                    {{{ButtonNoAccount}}}
                </div>
            </form>`
    };

};
