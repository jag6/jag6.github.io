import { pageTitle } from "../../utils.js";

const LanguageLearning = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header"><h1>どちがいい？</h1></section>
            <div id="language-practice-content">
                <div id="language-practice-options-container">
                    <div class="language-practice-options">
                        <div id="practice-hiragana" class="language-practice-option">
                            <a href="#/hiragana">平仮名</a>          
                        </div>
                        <div id="practice-definitions" class="language-practice-option">
                            <a href="#/definitions">定義の練習</p>          
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default LanguageLearning;