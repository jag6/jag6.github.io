import { pageTitle } from "../../utils.js";
import { practiceDefinitions } from "../../helpers/language-learning.js";

const Definitions = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>定義を選ぶ❕</h1>
                <section id="toggle-ruby" class="toggle-ruby"><button aria-label="Toggle Ruby Button" type="button">TOGGLE 振り仮名</button></section>
            </section>
            <div id="practice-definitions-container" class="practice-definitions-container">
                <ul id="words" class="words"></ul>
                <div class="definition-container">
                    <p id="definition"></p>
                    <p id="yes-no"></p>
                </div>
            </div>
        `;
    },
    after_render: () => {
        practiceDefinitions();
    }
}

export default Definitions;