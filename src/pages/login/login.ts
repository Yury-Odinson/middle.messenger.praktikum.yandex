import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";

export default class LoginPage extends Block {
    #data = {
        login: "",
        password: ""
    };

    init() {
        const onChangeLoginBind = this.onChangeLogin.bind(this);
        const onLoginBind = this.onLogin.bind(this);

        const InputLogin = new Input({
            name: "login",
            label: "Логин",
            type: "text",
            className: "input__form",
            id: "inpLogin",
            onchange: onChangeLoginBind
        });
        const InputPassword = new Input({
            name: "password", label: "Пароль", type: "password", className: "input__form", id: "inpPass"
        });
        const ButtonAuth = new Button({
            label: "Авторизоваться", className: "primary", type: "button", onClick: onLoginBind
        });
        const ButtonNoAccount = new Button({
            label: "Нет аккаунта?", className: "secondary", type: "button"
        });

        this.children = {
            // ...this.children,
            InputLogin,
            InputPassword,
            ButtonAuth,
            ButtonNoAccount
        };

        // this.name = "LoginPage";
    };

    onChangeLogin(e) {
        const inputValue = e.target.value;
        if (inputValue === 'error') {
            this.children.InputLogin.setProps({error: true, errorText: 'some error'});
            return;
        } else {
            this.children.InputLogin.setProps({error: false, errorText: null});

        }
        console.log(inputValue);
        this.setProps({login: this.props.login});
    }

    onLogin() {
        console.log(this.#data);
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
