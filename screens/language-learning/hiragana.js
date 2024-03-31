import { pageTitle } from "../../utils.js";
import { practiceHiragana } from "../../helpers/language-learning.js";

const Hiragana = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>平仮名の練習❕</h1>
            </section>
            <div id="practice-hiragana-container" class="language-practice-container practice-hiragana-container"></div>
        `;
    },
    after_render: () => {
        practiceHiragana();
    }
}

export default Hiragana;