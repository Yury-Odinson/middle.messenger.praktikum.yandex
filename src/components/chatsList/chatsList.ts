import Block from "../../core/Block.ts";
import {ChatItem} from "../chatItem";

export default class ChatsList extends Block {
    constructor(props) {
        super({...props});

    };

    init() {
        const msg1 = new ChatItem({
            imgLink: "/user1.jpg",
            imgAlt: "user-1.jpg",
            nameUser: "Андрей",
            messageUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            dateMessage: "10:49",
            unreadValue: "2"
        });
        const msg2 = new ChatItem({
            imgLink: "/user2.jpg",
            imgAlt: "user-2.jpg",
            nameUser: "Сергей",
            sender: "Вы: ",
            messageUser: "consectetur adipiscing elit, sed do eiusmod tempor incididnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            dateMessage: "08:49",
            unreadValue: "42"
        });
        const msg3 = new ChatItem({
            imgLink: "/user3.jpg",
            imgAlt: "user-3.jpg",
            nameUser: "Джеймс Хэтфилд",
            sender: "Вы: ",
            messageUser: "lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            dateMessage: "05:13",
            unreadValue: ""
        });
        const msg4 = new ChatItem({
            imgLink: "/user4.jpg",
            imgAlt: "user-4.jpg",
            nameUser: "Мистер Кот",
            sender: "",
            messageUser: "МЯУ",
            dateMessage: "пт",
            unreadValue: ""
        });

        this.children = {msg1, msg2, msg3, msg4}
    };

    render() {
        return `
            <div class="chat__items">
                {{{msg1}}}
                {{{msg2}}}
                {{{msg3}}}
                {{{msg4}}}
            </div>
        `
    };

};
