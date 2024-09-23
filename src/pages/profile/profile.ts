import Block from "../../core/Block.ts";
import {Button} from "../../components";

export default class profile extends Block {

    init() {

        const ButtonBack = new Button({className: "profile-back"});
        const ButtonChangeData = new Button({className: "profile-main", label: "Изменить данные"});
        const ButtonChangePassword = new Button({className: "profile-main", label: "Изменить пароль"});
        const ButtonLogOut = new Button({
            className: "profile-secondary",
            label: "Выйти",
        });

        this.children = {ButtonBack, ButtonChangeData, ButtonChangePassword, ButtonLogOut};
    };

    render() {
        return `
            <div class="wrapper">
                <a href="chat" page="chat">tmp link: chat</a>
                {{{ButtonBack}}}

                <div class="profile__field">

                    <div class="profile__main-data">
                        <img class="profile__avatar" src="/avatar-plug.png" width="130" height="130" alt="profile avatar">
                        <p class="profile__avatar-change">Поменять аватар</p>
                        <p class="profile__name">Иван</p>
                    </div>

                    <div class="profile__data">
                        <p>Почта</p>
                        <p>pochta@yandex.ru</p>
                    </div>
                    <div class="profile__data">
                        <p>Логин</p>
                        <p>ivanivanov</p>
                    </div>
                    <div class="profile__data">
                        <p>Имя</p>
                        <p>Иван</p>
                    </div>
                    <div class="profile__data">
                        <p>Фамилия</p>
                        <p>Иванов</p>
                    </div>
                    <div class="profile__data">
                        <p>Имя в чате</p>
                        <p>Иваныч</p>
                    </div>
                    <div class="profile__data">
                        <p>Телефон</p>
                        <p>+7 (123) 456 78 90</p>
                    </div>
            
                    <div class="profile__control">
                        {{{ButtonChangeData}}}
                        {{{ButtonChangePassword}}}
                        {{{ButtonLogOut}}}
                        <a href="login" page="login">tmp link: Выйти</a>
                    </div>

                </div>

            </div>
        
        `
    }
};
