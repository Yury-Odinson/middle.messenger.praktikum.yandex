import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {valLogin} from "../../utils/validations.ts";

export default class LoginPage extends Block {
    #data = {
        login: "",
        password: ""
    };

    init(): void {
        // const onChangeLoginBind = this.onChangeLogin.bind(this);
        const onLoginBind = this.onLogin.bind(this);

        const setLoginData = (e) => this.#data.login = e.target.value;
        const setPasswordData = (e) => this.#data.password = e.target.value;

        const InputLogin = new Input({
            name: "login",
            label: "Логин",
            type: "text",
            className: "input__form",
            id: "inpLogin",
            maxLength: "20",
            change: setLoginData
        });
        const InputPassword = new Input({
            name: "password",
            label: "Пароль",
            type: "password",
            className: "input__form",
            id: "inpPass",
            maxLength: "20",
            change: setPasswordData
        });
        const ButtonAuth = new Button({
            label: "Авторизоваться", className: "primary", type: "button", onClick: onLoginBind
        });
        const ButtonNoAccount = new Button({
            label: "Нет аккаунта?", className: "secondary", type: "button"
        });

        this.children = {
            InputLogin,
            InputPassword,
            ButtonAuth,
            ButtonNoAccount
        };

    };

    onChangeLogin(e): void {
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

    onLogin(): void {
        console.log(this.#data);
    };

    render(): string {
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
