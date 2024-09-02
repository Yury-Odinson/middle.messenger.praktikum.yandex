import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {valChangeLogin, valLengthLogin, valPassword} from "../../utils/validations.ts";
import {navigate} from "../../main.ts";

export default class LoginPage extends Block {
    data = {
        login: "",
        password: ""
    };

    init(): void {

        const navSignInPage = () => navigate("signIn");

        const checkLoginLength = valLengthLogin.bind(this);
        const checkPassword = valPassword.bind(this);

        const onLoginBind = this.onLogin.bind(this);

        const setLoginData = (e) => this.data.login = valChangeLogin(e);
        const setPasswordData = (e) => this.data.password = e.target.value;

        const InputLogin = new Input({
            name: "login", label: "Логин", type: "text", className: "input__form", id: "inpLogin",
            maxLength: "20", minLength: "3", error: "",
            change: setLoginData,
            onBlur: checkLoginLength
        });

        const InputPassword = new Input({
            name: "password", label: "Пароль", type: "password", className: "input__form", id: "inpPass",
            maxLength: "20", minLength: "8",
            change: setPasswordData,
            onBlur: checkPassword
        });

        const ButtonAuth = new Button({
            // ЗАМЕТКА ДЛЯ РЕВЬЮЕРА: на текущий момент стоит тип button для того,
            // чтобы при клике не происходила перезагрузка страницы и можно было согласно ТЗ,
            // увидеть в console.log() данные, которые будут перенаправлены в API.
            label: "Авторизоваться", className: "primary", type: "button", onClick: onLoginBind
        });
        const ButtonNoAccount = new Button({
            label: "Нет аккаунта?", className: "secondary", type: "button", onClick: navSignInPage
        });

        this.children = {InputLogin, InputPassword, ButtonAuth, ButtonNoAccount};

    };

    // Функция на дальнейшую отправку данных в API
    onLogin(): void {
        console.log(this.data);
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
