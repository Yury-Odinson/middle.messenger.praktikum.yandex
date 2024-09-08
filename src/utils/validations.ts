export function valChangeLogin(e) {
    const regex = /^[A-Za-z0-9\-]*$/;

    if (!regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\-]+/g, "");
    }

    return e.target.value;
}

export function valLengthLogin() {
    // console.log(this.children)
    if (this.data.login.length < 3) {
        this.children.InputLogin.props.error = "Некорректный логин";
    } else {
        this.children.InputLogin.props.error = "";
    }
}

// export function valPassword() {
//     if (this.data.password.length < 8) {
//         this.children.InputPassword.props.error = "Слишком короткий пароль";
//     } else {
//         this.children.InputPassword.props.error = "";
//     }
// }

export function valEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(this.data.email)) {
        this.children.InputEmail.props.error = "Некорректный Email";
    } else {
        this.children.InputEmail.props.error = "";
    }
}

export function valName(e) {
    const name = e.target;
    name.value = name.value.replace(/[^A-Za-zА-Яа-яёЁ\-]+/g, "");

    if (name.value.length > 0) {
        name.value = name.value[0].toUpperCase() + name.value.slice(1);
    }

    return name.value;
}

export function valFirstName() {
    if (this.data.first_name.length < 2) {
        this.children.InputFirstName.props.error = "Введите имя";
    } else {
        this.children.InputFirstName.props.error = "";
    }
}

export function valSecondName() {
    if (this.data.second_name.length < 2) {
        this.children.InputSecondName.props.error = "Введите фамилию";
    } else {
        this.children.InputSecondName.props.error = "";
    }
}


export function valPhone(e) {
    e.target.value = e.target.value.replace(/\D/g, "");

    if (e.target.value) {
        e.target.value = "+" + e.target.value;
    }

    return e.target.value;
}
export function valLengthPhone() {
    if (this.data.phone.length < 10) {
        this.children.InputPhone.props.error = "Некорректный номер телефона";
    } else {
        this.children.InputPhone.props.error = "";
    }
}



export function valMessage() {
    if (this.value.length !== "") return this.value;

    return "Введите сообщение";
}

export function valPassword() {
    const regex = /^(?=.*[A-Z]).{8,40}$/;

    if (!regex.test(this.password)) {
        this.children.InputPassword.props.error = "Пароль слишком простой";
    } else {
        this.children.InputPassword.props.error = "";
    }

    if (this.password !== this.confirmPassword) {
        this.children.InputConfirmPassword.props.error = "Пароль не совпадает";
    } else {
        this.data.password = this.password;
        this.children.InputConfirmPassword.props.error = "";
    }
}



export function checkValid() {
    for (const key in this.children) {
        if (this.children[key].props.error) {
            this.props.buttonClass = "secondary";
            break;
        }
        this.props.buttonClass = "primary";
    }
}
