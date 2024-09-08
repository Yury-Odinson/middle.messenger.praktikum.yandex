import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import './style.css'

const pages = {
    "nav": [Pages.NavigatePage],
    "chat": [Pages.ChatPage],
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
    "signIn": [Pages.SignInPage]
};

Object.entries(Components).forEach(([name, component]): void => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: string): void {
    //@ts-ignore
    const [Source] = pages[page];
    const component = new Source();
    const container: HTMLElement = document.getElementById('app')!;
    // очистка для перехода между страницами
    container.innerHTML = "";
    container.append(component.getContent());
}

document.addEventListener("DOMContentLoaded", () => navigate("signIn"));

// document.addEventListener("DOMContentLoaded", () => {
//     navigate("error500");
//     const testVal = document.getElementById("intest");
//
//     testVal.addEventListener("input", valPassword);
//
// });

document.addEventListener('click', e => {
    //@ts-ignore
    const page = e.target.getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
