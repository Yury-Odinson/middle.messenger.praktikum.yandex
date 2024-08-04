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
    "dialogLoadDone": [Pages.DialogLoadDonePage],
    "dialogLoadError": [Pages.DialogLoadErrorPage],
    "error404": [Pages.Error404Page],
    "error500": [Pages.Error500Page],
    "login": [Pages.LoginPage],
    "profile": [Pages.ProfilePage],
    "profileChangeData": [Pages.ProfileChangeDataPage],
    "profileChangePassword": [Pages.ProfileChangePasswordPage],
    "profileLoadAvatar": [Pages.ProfileLoadAvatarPage],
    "signIn": [Pages.SignInPage]
};

Object.entries(Components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
    const [source, context] = pages[page];
    const container = document.getElementById("app");
    const templatingFunction = Handlebars.compile(source);
    container.innerHTML = templatingFunction(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("chat"));

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});