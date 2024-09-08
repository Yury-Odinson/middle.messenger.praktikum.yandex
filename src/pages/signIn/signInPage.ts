import Block from "../../core/Block.ts";
import {Button, Input} from "../../components";
import {
    valEmail,
    valChangeLogin,
    valLengthLogin,
    valName,
    valFirstName,
    valSecondName,
    valPhone,
    valLengthPhone,
    valPassword, checkValid
} from "../../utils/validations.ts";
import {nanoid} from "nanoid";
import InputItem from "../../components/input/inputItem.ts";

export default class SignInPage extends Block {

    constructor(props: object) {
        super({
            ...props,
            isValid: false,
            buttonClass: "secondary"
        });
    };

    data = {
        email: "",
        login: "",
        first_name: "",
        second_name: "",
        phone: "",
        password: ""
    };

    password: string = "";
    confirmPassword: string = "";

    // isValid: boolean = false;

    // private children: {
    //     InputPassword,
    //     ButtonSignIn,
    //     InputPhone,
    //     InputEmail,
    //     InputLogin,
    //     InputFirstName,
    //     InputSecondName,
    //     InputConfirmPassword
    // };

    init() {

        const setEmailData = (e) => this.data.email = e.target.value;
        const setLoginData = (e) => this.data.login = valChangeLogin(e);
        const setFirstName = (e) => this.data.first_name = valName(e);
        const setSecondName = (e) => this.data.second_name = valName(e);
        const setPhone = (e) => this.data.phone = valPhone(e);
        const setPassword = (e) => this.password = e.target.value;
        const setConfirmPassword = (e) => this.confirmPassword = e.target.value;

        const checkLoginLength = valLengthLogin.bind(this);
        const checkEmail = valEmail.bind(this);
        const checkFirstNameLength = valFirstName.bind(this);
        const checkSecondNameLength = valSecondName.bind(this);
        const checkPhoneLength = valLengthPhone.bind(this);
        const checkPassword = valPassword.bind(this);

        const onLoginBind = this.onSignIn.bind(this);


        const checkValidBind = checkValid.bind(this)




        const InputEmail: InputItem = new Input({
            name: "email", id: nanoid(10), label: "Почта", type: "text", className: "input__form",
            change: setEmailData,
            onBlur: checkEmail
        });

        const InputLogin: InputItem = new Input({
            name: "login", id: nanoid(10), label: "Логин", type: "text", className: "input__form",
            minLength: "3", maxLength: "20",
            change: setLoginData,
            onBlur: checkLoginLength, checkValidBind
        });

        const InputFirstName: InputItem = new Input({
            name: "first_name", id: nanoid(10), label: "Имя", type: "text", className: "input__form",
            change: setFirstName,
            onBlur: checkFirstNameLength
            // onBlur: checkValidBind
        });

        const InputSecondName: InputItem = new Input({
            name: "second_name", id: nanoid(10), label: "Фамилия", type: "text", className: "input__form",
            change: setSecondName,
            onBlur: checkSecondNameLength
        });

        const InputPhone: InputItem = new Input({
            name: "phone", id: nanoid(10), label: "Телефон", type: "text", className: "input__form",
            minLength: "10", maxLength: "15",
            change: setPhone,
            onBlur: checkPhoneLength
        });

        const InputPassword: InputItem = new Input({
            name: "password", id: nanoid(10), label: "Пароль", type: "password",
            className: "input__form", minLength: "8", maxLength: "40",
            change: setPassword
        });

        const InputConfirmPassword: InputItem = new Input({
            name: "password", id: nanoid(10), label: "Пароль (ещё раз)", type: "password",
            className: "input__form", minLength: "8", maxLength: "40",
            change: setConfirmPassword,
            onBlur: checkPassword
        });

        const ButtonSignIn: Button = new Button({
            label: "Зарегистрироваться", className: this.props.buttonClass,
            // type: this.props.isValid ? "submit" : "button",
            // onClick: onLoginBind
            type: "button",
            onClick: checkValidBind
        });

        this.children = {
            InputEmail, InputLogin, InputFirstName, InputSecondName, InputPhone, InputPassword, InputConfirmPassword,
            ButtonSignIn
        };
    };

    onSignIn(): void {
        console.log(this.data);
    };

    componentDidUpdate(oldProps, newProps): boolean {
        // console.log("sdf")
        // console.log(this.props.buttonClass)
        for (const key in oldProps) {
            if (oldProps[key] !== newProps[key]) {
                this.setProps({[key]: newProps[key]});
                // console.log("form btn.props: " + this.props.buttonClass);
            }
        }
        return true;
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
