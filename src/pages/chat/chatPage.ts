import Block from "../../core/Block.ts";
import {Button, ChatsList, Input} from "../../components";
import MessageItem from "../../components/message/message.ts";

export default class ChatPage extends Block{
    constructor(props: object) {
        super({...props});
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


        const Message1 = new MessageItem({
            className:"message-user",
            content:"Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент\n                            попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что\n                            астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на\n                            поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n                       \n                            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда\n                            и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000\n                            евро.",
            attachments:"",
            date:"13:49"
        });
        const Message2 = new MessageItem({
            className:"message-user message-user-with-attach",
            content:"Зацени",
            attachments:"/message-image.png",
            date:"13:49"
        });
        const Message3 = new MessageItem({
            className:"message-you",
            content:"Lorem",
            attachments:"",
            date:"13:49"
        });
        const Message4 = new MessageItem({
            className:"message-you message-user-with-attach",
            content:"тут всплыл интересный кусок лунной космической истории",
            attachments:"/message-image.png",
            date:"13:59"
        });

        this.children = {
            Chats,
            ButtonProfile,
            InputNavSearch,
            ButtonChatSetting,
            ButtonAttachment,
            InputMessage,
            ButtonSendMessage,
            Message1,
            Message2,
            Message3,
            Message4
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
                    
                    {{{Message1}}}
                    {{{Message2}}}
                    {{{Message3}}}
                    {{{Message4}}}
                    
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
