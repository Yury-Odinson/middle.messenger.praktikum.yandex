import Block from "../../core/Block.ts";

export default class MessageItem extends Block {
    constructor(props) {
        super("div", {...props});
    };

    render() {
        return `
            <div class="chat__message {{className}}">
                <div class="message-content">{{content}}</div>
                <div class="message-attachments">
                    <img class="message-attachment__item" src="{{attachments}}" alt="message image">
                </div>
                <div class="message-info">
                    <img class="message-status" src="/message-read-icon.png" alt="message read icon" width="10" height="5">
                    <p class="message-date">{{date}}</p>
                </div>
            </div>
        `
    };
};
