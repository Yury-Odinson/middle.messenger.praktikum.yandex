export function valChangeLogin(e) {
    const regex = /^[A-Za-z0-9\-]*$/;

    if (!regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\-]+/g, "");
    }

    return e.target.value;
}

export function valLengthLogin() {
    if (this.data.login.length < 3 && this.data.login.length > 0) {
        this.children.InputLogin.props.error = "Некорректный логин";
    } else {
        this.children.InputLogin.props.error = "";
    }
}

export function valPassword() {
    if (this.data.password.length < 8 && this.data.password.length > 0) {
        this.children.InputPassword.props.error = "Слишком короткий пароль";
    } else {
        this.children.InputPassword.props.error = "";
    }
}

export function valEmail() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(this.data.email) && this.data.email !== "") {
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
    if (this.data.first_name.length < 2 && this.data.first_name.length > 0) {
        this.children.InputFirstName.props.error = "Введите имя";
    } else {
        this.children.InputFirstName.props.error = "";
    }
}

export function valSecondName() {
    if (this.data.second_name.length < 2 && this.data.second_name.length > 0) {
        this.children.InputSecondName.props.error = "Введите фамилию";
    } else {
        this.children.InputSecondName.props.error = "";
    }
}


export function valPhone() {
    if (this.value.length === 0) return;
}


export function valMessage() {
    if (this.value.length !== "") return this.value;

    return "Введите сообщение";
}
