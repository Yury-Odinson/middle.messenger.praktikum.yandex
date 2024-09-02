import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {
    valEmail,
    valChangeLogin,
    valLengthLogin,
    valName,
    valFirstName,
    valSecondName
} from "../../utils/validations.ts";
import {nanoid} from "nanoid";

export default class SignInPage extends Block {
    data = {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: ""
    };

    init() {

        const setEmailData = (e) => this.data.email = e.target.value;
        const setLoginData = (e) => this.data.login = valChangeLogin(e);
        const setFirstName = (e) => this.data.first_name = valName(e);
        const setSecondName = (e) => this.data.second_name = valName(e);

        const checkLoginLength = valLengthLogin.bind(this);
        const checkEmail = valEmail.bind(this);
        const checkFirstNameLength = valFirstName.bind(this);
        const checkSecondNameLength = valSecondName.bind(this);


        const onLoginBind = this.onSignIn.bind(this);


        const InputEmail = new Input({
            name: "email", id: nanoid(10), label: "Почта", type: "text", className: "input__form",
            change: setEmailData,
            onBlur: checkEmail
        });

        const InputLogin = new Input({
            name: "login", id: nanoid(10), label: "Логин", type: "text", className: "input__form",
            maxLength: "20", minLength: "3",
            change: setLoginData,
            onBlur: checkLoginLength
        });

        const InputFirstName = new Input({
            name: "first_name", id: nanoid(10), label: "Имя", type: "text", className: "input__form",
            change: setFirstName,
            onBlur: checkFirstNameLength
        });

        const InputSecondName = new Input({
            name: "second_name", id: nanoid(10), label: "Фамилия", type: "text", className: "input__form",
            change: setSecondName,
            onBlur: checkSecondNameLength
        });

        const InputPhone = new Input({
            name: "phone", id: nanoid(10), label: "Телефон", type: "text", className: "input__form"
        });

        const InputPassword = new Input({
            name: "password", id: nanoid(10), label: "Пароль", type: "password",
            className: "input__form input__form-errPwd"
        });

        const InputConfirmPassword = new Input({
            name: "password", label: "Пароль (ещё раз)", type: "password", className: "input__form input__form-errPwd",
        });

        const ButtonSignIn = new Button({
            label: "Зарегистрироваться",
            className: "primary",
            type: "button",
            onClick: onLoginBind
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

    onSignIn(): void {
        console.log(this.data);
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
