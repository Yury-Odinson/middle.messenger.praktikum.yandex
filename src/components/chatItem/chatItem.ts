import Block from "../../core/Block.ts";

export default class ChatItem extends Block {
    constructor(props) {
        super("div", {...props});

    }

    render() {
        return `
            <div class="chat__item {{className}}">
                <img class="chat__item-avatar" src={{imgLink}} width="50" height="50" alt={{imgAlt}}>
                <div class="chat__item-data">
                    <p class="chat__item-name">{{nameUser}}</p>
                    <div class="chat__item-message">
                        <span>{{sender}}</span>
                        <span>{{messageUser}}</span>
                    </div>
                </div>
                <div class="chat__item-info">
                    <p class="chat__item-message-date">{{dateMessage}}</p>
                    <p class="chat__item-unread-value">{{unreadValue}}</p>
                </div>
            </div>
        `
    }

};
