import { pageTitle } from "../../utils.js";
import { showWordList } from "../../helpers/language-learning/functions.js";

const WordList = {
    render: () => {
        pageTitle.textContent = '単語一覧';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>単語一覧</h1>
            </section>
            <ul id="word-list" class="word-list"></ul>
        `;
    }, 
    after_render: () => {
        showWordList();
    }
}

export default WordList;