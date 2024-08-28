import Block from "../../core/Block.ts";
import {Button, ChatsList, Input} from "../../components";

export default class ChatPage extends Block{
    constructor(props: object) {
        super("div",{...props});
    };

    init() {
        const Chats = new ChatsList({});
        const ButtonProfile = new Button({className: "nav-profile", label: "Профиль"});
        const InputNavSearch = new Input({
            name: "nav-search", className: "input__nav-search", type: "text", label:"Поиск"
        });
        const ButtonChatSetting =  new Button({className: "chat-settings"});
        const ButtonAttachment = new Button({className: "attachment", label: ""});
        const InputMessage = new Input({
            name: "message", className: "input__message", type: "text", label:"Сообщение"
        });
        const ButtonSendMessage = new Button({className: "send-message", label: ""});

        this.children = {
            Chats,
            ButtonProfile,
            InputNavSearch,
            ButtonChatSetting,
            ButtonAttachment,
            InputMessage,
            ButtonSendMessage
        };
    };

    render() {
        return `
            <div class="wrapper">
                <div class="chat__nav">
                    <div class="chat__nav-header">
                        {{{ButtonProfile}}}
                        {{{InputNavSearch}}}
                    </div>
                    {{{Chats}}}
                </div>

                <div class="chat__field">

                <div class="chat__header">
                    <div class="chat__user-info">
                        <img class="chat__item-avatar" src="/user4.jpg" width="50" height="50" alt="user avatar">
                        <p class="chat__item-name">Мистер Кот</p>
                    </div>
                    <div class="chat__settings">
                        {{{ButtonChatSetting}}}
                    </div>
                </div>

                <div class="chat__main">

                    <p class="chat__date-message">2 августа 2016 г.</p>

                    <div class="chat__message message-user">
                        <div class="message-content">
                            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                            попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                            астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                            поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                            <br>
                            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда
                            и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                            евро.
                        </div>
                    <div class="message-attachments"></div>
                    <div class="message-info">
                        <p class="message-date">13:49</p>
                    </div>
                </div>

                <div class="chat__message message-user">
                    <div class="message-content"></div>
                    <div class="message-attachments">
                        <img src="/message-image.png" alt="message image">
                    </div>
                    <div class="message-info">
                        <p class="message-date">14:37</p>
                    </div>
                </div>

                </div>

                <div class="chat__footer">
                    {{{ButtonAttachment}}}
                    {{{InputMessage}}}
                    {{{ButtonSendMessage}}}
                </div>
            </div>
        </div>
        `
    };

};
