import Home from "./screens/home.js";
import NASA from "./screens/nasa.js";
import CryptoScreen from "./screens/crypto.js";
import Error404 from "./screens/404.js";
import LanguageLearning from "./screens/language-learning/index.js";
import Hiragana from "./screens/language-learning/hiragana.js";
import Japanese from "./screens/language-learning/japanese.js";
import Words from "./screens/language-learning/words.js";
import WordList from "./screens/language-learning/word_list.js";

const routes = {
    '/': Home,
    '/nasa': NASA,
    '/language-learning': LanguageLearning,
    '/hiragana': Hiragana,
    '/japanese': Japanese,
    '/word-list': WordList,
    '/words': Words,
    '/crypto': CryptoScreen
}

export const parseRequestURL = () => {
    const address = document.location.hash.slice(1).split('?')[0];
    const queryString = document.location.hash.slice(1).split('?').length === 2
        ? document.location.hash.slice(1).split('?')[1]
        : '';
    const url = address.toLowerCase() || '/';
    const r = url.split('/');
    const q = queryString.split('=');
    return {
        resource: r[1],
        id: r[2],
        verb: r[3],
        name: q[0],
        value: q[1]
    };
}

const router = async () => {
    const request = parseRequestURL();
    const pareseURL = 
        (request.resource ? `/${request.resource}`: '/') + 
        (request.id ? '/:id': '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[pareseURL] ? routes[pareseURL]: Error404;

    const main = document.querySelector('main');
    main.innerHTML = await screen.render();
    if(screen.after_render) await screen.after_render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);