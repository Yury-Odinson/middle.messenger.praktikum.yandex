import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './style.css'

const pages = {
    "nav": [Pages.NavigatePage],
    "chat": [Pages.ChatPage],
    "chatAddRemoveUser": [Pages.ChatAddRemoveUserPage],
    "chatFunctions": [Pages.ChatFunctionsPage],
    "chatSearch": [Pages.ChatSearchPage],
    "chatSelect": [Pages.ChatSelectPage],
    "dialogLoad": [Pages.DialogLoadPage],
    "error404": [Pages.Error404Page],
    "error500": [Pages.Error500Page],
    "login": [Pages.LoginPage],
    "profile": [Pages.ProfilePage],
    "profileChangeData": [Pages.ProfileChangeDataPage],
    "profileChangePassword": [Pages.ProfileChangePasswordPage],
    "profileLoadAvatar": [Pages.ProfileLoadAvatarPage],
    "signIn": [Pages.SignIn]
};

Object.entries(Components).forEach(([name, component]): void => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: string): void {
    //@ts-ignore
    const [source, context] = pages[page];
    const container: HTMLElement = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("signIn"));

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
