import topHeader from "../components/topHeader.js";
import { fetchAPI } from "../helpers/fetch.js";
import { pageTitle } from "../utils.js";

const WOTD = {
    render: async () => {
        pageTitle.textContent = 'Word of the Day';
        const randomWord = await fetchAPI('https://api.wordnik.com/v4/words.json/randomWord?api_key=c7qszlw03foauttnqf1s64tj9ce74mgdsug079c70xoct34d0');        
        return `
            ${topHeader.render('Coming Soon...')}
            <div>${randomWord.word}</div>
        `;
    },
    after_render: async () => {}
}

export default WOTD;