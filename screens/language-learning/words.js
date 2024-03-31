import { pageTitle } from "../../utils.js";
import { practiceWords } from "../../helpers/language-learning.js";

const Words = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>単語を選ぶ❕</h1>
                <section id="toggle-ruby" class="toggle-ruby"><button aria-label="Toggle Ruby Button" type="button">TOGGLE 振り仮名</button></section>
            </section>
            <div id="practice-words-container" class="practice-words-container">
                <ul id="words" class="words"></ul>
                <div class="chosen-word-container">
                    <p id="chosen-word"></p>
                    <p id="yes-no"></p>
                </div>
            </div>
        `;
    },
    after_render: () => {
        practiceWords();
    }
}

export default Words;