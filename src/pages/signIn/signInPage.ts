import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {valEmail, valChangeLogin} from "../../utils/validations.ts";

export default class SignInPage extends Block {
    #data = {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: ""
    };

    init() {

        const setLoginData = (e) => this.#data.login = valChangeLogin(e);

        const validateEmail = (e) => {
            this.#data.email = valEmail(e);
        };



        const InputEmail = new Input({
            name: "email", label: "Почта", type: "text", className: "input__form",
            // error: checkEmailError,
            onBlur: validateEmail
        });

        const InputLogin = new Input({
            name: "login", label: "Логин", type: "text", className: "input__form", maxLength: "20", minLength: "3",
            change: setLoginData
        });

        const InputFirstName = new Input({
            name: "first_name", label: "Имя", type: "text", className: "input__form"
        });

        const InputSecondName = new Input({
            name: "second_name", label: "Фамилия", type: "text", className: "input__form"
        });

        const InputPhone = new Input({
            name: "phone", label: "Телефон", type: "text", className: "input__form"
        });

        const InputPassword = new Input({
            name: "password", label: "Пароль", type: "password", className: "input__form input__form-errPwd"
        });

        const InputConfirmPassword = new Input({
            name: "password", label: "Пароль (ещё раз)", type: "password", className: "input__form input__form-errPwd",
            error: "Пароли не совпадают!"
        });

        const ButtonSignIn = new Button({
            label: "Зарегистрироваться",
            className: "primary",
            type: "button"
        });

        this.children = {
            InputEmail,
            InputLogin,
            InputFirstName,
            InputSecondName,
            InputPhone,
            InputPassword,
            InputConfirmPassword,
            ButtonSignIn
        };
    };

    render() {
        return `
            <form class="form">
                <div class="form-data">
                    <p class="form-data__title">Регистрация</p>
                    {{{InputEmail}}}
                    {{{InputLogin}}}
                    {{{InputFirstName}}}
                    {{{InputSecondName}}}
                    {{{InputPhone}}}
                    {{{InputPassword}}}
                    {{{InputConfirmPassword}}}
                </div>

                <div class="form-control">
                    {{{ButtonSignIn}}}
                </div>
            </form>`
    };
};
