import Block from "../../core/Block.ts";
import {Button} from "../../components";

export default class SignIn extends Block {

    constructor(props: object) {
        super("form", {...props,});
    };

    init() {
        const ButtonSignIn = new Button({label: "Зарегистрироваться", type: "primary"});
        this.children = {ButtonSignIn};
    };

    render() {
        return `
            <form class="form">
                <div class="form-data">
                    <p class="form-data__title">Регистрация</p>
                    
<!--                    {{> Input name="email" label="Почта" type="text" appointment="input__form"}}-->
<!--                    {{> Input name="login" label="Логин" type="text" appointment="input__form"}}-->
<!--                    {{> Input name="first_name" label="Имя" type="text" appointment="input__form"}}-->
<!--                    {{> Input name="second_name" label="Фамилия" type="text" appointment="input__form"}}-->
<!--                    {{> Input name="phone" label="Телефон" type="text" appointment="input__form"}}-->
<!--                    {{> Input name="password" label="Пароль" type="password" appointment="input__form input__form-errPwd"}}-->
<!--                    {{> Input name="password" label="Пароль (ещё раз)" type="password" appointment="input__form input__form-errPwd" error="Пароли не совпадают!" }}-->
                
                </div>

                <div class="form-control">
                    {{{ButtonSignIn}}}
                </div>
            </form>`
    }
};
