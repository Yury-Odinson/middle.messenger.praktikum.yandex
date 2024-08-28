import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";

export default class SignIn extends Block {

    constructor(props: object) {
        super("form", {...props,});
    };

    init() {
        const InputEmail = new Input({
            name: "email", label: "Почта", type:"text", appointment:"input__form"
        });
        const InputLogin = new Input({
            name: "login", label: "Логин", type:"text", appointment:"input__form"
        });
        const InputFirstName = new Input({
            name: "first_name", label: "Имя", type:"text", appointment:"input__form"
        });
        const InputSecondName = new Input({
            name: "second_name", label: "Фамилия", type:"text", appointment:"input__form"
        });
        const InputPhone = new Input({
            name: "phone", label: "Телефон", type:"text", appointment:"input__form"
        });
        const InputPassword = new Input({
            name: "password", label: "Пароль", type:"password", appointment:"input__form input__form-errPwd"
        });
        const InputConfirmPassword = new Input({
            name: "password", label: "Пароль (ещё раз)", type:"password", appointment:"input__form input__form-errPwd",
            error: "Пароли не совпадают!"
        });

        const ButtonSignIn = new Button({label: "Зарегистрироваться", type: "primary"});
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
    }
};
