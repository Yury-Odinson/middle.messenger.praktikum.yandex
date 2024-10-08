import Block from "../../core/Block.ts";
import {Button, ChatsList, Input} from "../../components";
import MessageItem from "../../components/message/message.ts";
import ModalControlUser from "../../components/modalControlUser/modalControlUser.ts";

export default class ChatPage extends Block {
    constructor(props: object) {
        super({
            ...props,
            isShowSettings: false,
            isShowModal: false,
            isAddUserModal: true
        });
    };

    init() {
        const showControlUser = () => this.setProps({isShowSettings: !this.props.isShowSettings});
        const openModalAddUser = () => {
            return this.setProps({
                isShowModal: !this.props.isShowModal,
                isAddUserModal: true
            });
        };

        const openModalRemoveUser = () => {
            return this.setProps({
                isShowModal: !this.props.isShowModal,
                isAddUserModal: false
            });
        };

        const Chats = new ChatsList({});
        const ButtonProfile = new Button({
            className: "nav-profile",
            label: "Профиль"
        });

        const InputNavSearch = new Input({
            name: "nav-search", className: "input__nav-search", type: "text", label: "Поиск"
        });

        const ButtonChatSetting = new Button({
            className: "chat-settings",
            onClick: showControlUser
        });

        const ButtonAttachment = new Button({className: "attachment", label: ""});
        const InputMessage = new Input({
            name: "message", className: "input__message", type: "text", label: "Сообщение"
        });

        const ButtonSendMessage = new Button({className: "send-message", label: ""});

        const ButtonAddUser = new Button({
            className: "add-user",
            label: "Добавить пользователя",
            onClick: openModalAddUser
        });

        const ButtonRemoveUser = new Button({
            className: "remove-user",
            label: "Удалить пользователя",
            onClick: openModalRemoveUser
        });

        const ModalUser = new ModalControlUser({
            isOpen: true,
            isAddUser: this.props.isAddUserModal
        });

        const Message1 = new MessageItem({
            className: "message-user",
            content: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент" +
                "попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что\n" +
                " астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на " +
                "поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге " +
                "адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. " +
                "Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
            attachments: "",
            date: "13:49"
        });

        const Message2 = new MessageItem({
            className: "message-user message-user-with-attach",
            content: "Зацени",
            attachments: "/message-image.png",
            date: "13:49"
        });

        const Message3 = new MessageItem({
            className: "message-you",
            content: "Lorem",
            attachments: "",
            date: "13:49"
        });

        const Message4 = new MessageItem({
            className: "message-you message-user-with-attach",
            content: "тут всплыл интересный кусок лунной космической истории",
            attachments: "/message-image.png",
            date: "13:59"
        });

        this.children = {
            Chats, ButtonProfile, InputNavSearch, ButtonChatSetting, ButtonAttachment, InputMessage,
            ButtonSendMessage, ButtonAddUser, ButtonRemoveUser, Message1, Message2, Message3, Message4, ModalUser,
        };
    };

    componentDidUpdate(oldProps, newProps): boolean {
        for (const key in oldProps) {
            if (oldProps[key] !== newProps[key]) {
                this.setProps({[key]: newProps[key]});
                this.children.ModalUser?.setProps({
                    isAddUser: this.props.isAddUserModal
                });
            }
        }
        return true;
    };

    render() {

        const {isShowSettings} = this.props;

        return `
            <div class="wrapper">       
            
                {{#if isShowModal}}    
                    {{{ModalUser}}}
                {{/if}}
            
                <div class="chat__nav">
                    <div class="chat__nav-header">
                    
                    <a href="profile" page="profile">tmp link: profile</a>
                   
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
                    
                    <div class="chat__settings-menu ${isShowSettings ? "" : "hidden"}">
                        {{{ButtonAddUser}}}
                        {{{ButtonRemoveUser}}}
                    </div>
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
