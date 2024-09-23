import Block from "../../core/Block.ts";

export default class Navigate extends Block {
    render() {

        return `
            <nav>
                <ul>
                    <li><a href="chat" page="chat">chat</a></li>
                    <li><a href="#" page="chatSearch">chatSearch</a></li>
                    <li><a href="#" page="chatSelect">chatSelect</a></li>
                    <li><a href="#" page="dialogLoad">dialogLoad</a></li>
                    <li><a href="error404" page="error404">error404</a></li>
                    <li><a href="error500" page="error500">error500</a></li>
                    <li><a href="login" page="login">login</a></li>
                    <li><a href="profile" page="profile">profile</a></li>
                    <li><a href="#" page="profileChangeData">profileChangeData</a></li>
                    <li><a href="#" page="profileChangePassword">profileChangePassword</a></li>
                    <li><a href="#" page="profileLoadAvatar">profileLoadAvatar</a></li>
                    <li><a href="signin" page="signIn">signIn</a></li>
                </ul>
            </nav>
        `
    };
};
