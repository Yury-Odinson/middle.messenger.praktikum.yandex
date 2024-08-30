export function valMessage() {
    if (this.value.length !== "") return this.value;

    return "Введите сообщение";
}

export function valName() {
    if (this.value.length === 0) return;

    this.value = this.value[0].toUpperCase() + this.value.slice(1);
    const regex = /^[A-Za-zА-Яа-яёЁ\-]*$/;

    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^A-Za-zА-Яа-яёЁ\-]+/g, "");
    }

    if (this.value.length < 3) return console.log("Недостаточно символов");

    return this.value;
}

export function valLogin(e) {
    const regex = /^[A-Za-z0-9\-]*$/;

    if (!regex.test(e.target.value)) {
        e.target.value = e.target.value.replace(/[^A-Za-z0-9\-]+/g, "");
    }

    return e.target.value;
}

export function valEmail() {
    if (this.value.length === 0) return;

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(this.value)) {
        console.log("Проверьте Email");
    }
    return this.value;
}

export function valPassword() {
    if (this.value.length === 0) return;

    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;

    if (!regex.test(this.value)) {
        console.log("Проверьте пароль");
    }
    return this.value;
}

export function valPhone() {
    if (this.value.length === 0) return;
}
