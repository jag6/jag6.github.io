import { pageTitle } from "../../utils.js";

const Definitions = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header"><h1>定義の練習❕</h1></section>
            <section class="practice-definitions-container">
                <h2>Coming Soon...</h2>
            </section>
        `;
    },
    after_render: () => {
    }
}

export default Definitions;