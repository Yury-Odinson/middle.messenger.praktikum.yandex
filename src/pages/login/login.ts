import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {valLogin} from "../../utils/validations.ts";

export default class LoginPage extends Block {
    #data = {
        login: "",
        password: ""
    };

    init(): void {
        const checkLoginLengthBind = checkLoginLength.bind(this);
        const checkPasswordLengthBind = checkPasswordLength.bind(this);
        const onLoginBind = this.onLogin.bind(this);

        const setLoginData = (e) => this.#data.login = valLogin(e);
        const setPasswordData = (e) => this.#data.password = e.target.value;

        function checkLoginLength(): void {
            if (this.#data.login.length < 3) {
                InputLogin.props.error = "Некорректный логин";
            } else {
                InputLogin.props.error = "";
            }
        }

        function checkPasswordLength(): void {
            if (this.#data.password.length < 8) {
                InputPassword.props.error = "Слишком короткий пароль";
            } else {
                InputPassword.props.error = "";
            }
        }

        const InputLogin = new Input({
            name: "login",
            label: "Логин",
            type: "text",
            className: "input__form",
            id: "inpLogin",
            maxLength: "20",
            error: "",
            change: setLoginData,
            onBlur: checkLoginLengthBind
        });
        const InputPassword = new Input({
            name: "password",
            label: "Пароль",
            type: "password",
            className: "input__form",
            id: "inpPass",
            maxLength: "20",
            change: setPasswordData,
            onBlur: checkPasswordLengthBind
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

    // Функция на дальнейшую отправку данных в API
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
