import { pageTitle } from "../../utils.js";
import { practiceDefinitions } from "../../helpers/language-learning.js";

const Definitions = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>定義の練習❕</h1>
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