import { pageTitle } from "../../utils.js";
import { practiceJapanese } from "../../helpers/language-learning.js";

const Japanese = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>日本語の練習❕</h1>
            </section>
            <div id="practice-japanese-container" class="language-practice-container practice-japanese-container"></div>
        `;
    },
    after_render: () => {
        practiceJapanese();
    }
}

export default Japanese;