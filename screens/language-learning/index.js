import { pageTitle } from "../../utils.js";

const LanguageLearning = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header">
                <h1>どちがいい？</h1>
            </section>
            <div id="language-practice-content">
                <div id="language-practice-options-container">
                    <div class="language-practice-options">
                        <div id="practice-hiragana" class="language-practice-option">
                            <p href="#/hiragana">平仮名</a>          
                        </div>
                        <div id="practice-japanese" class="language-practice-option">
                            <p href="#/japanese">日本語</a>          
                        </div>
                        <div id="practice-words" class="language-practice-option">
                            <p href="#/words">単語</p>          
                        </div>
                        <div id="see-word-list" class="language-practice-option">
                            <p href="#/word-list">単語一覧</p>          
                        </div>
                    </div>
                </div>
            </div>
        `;
    }, 
    after_render: () => {
        document.getElementById('practice-hiragana').addEventListener('click', () => {
            location.hash = '/hiragana';
        });
        document.getElementById('practice-japanese').addEventListener('click', () => {
            location.hash = '/japanese';
        });
        document.getElementById('practice-words').addEventListener('click', () => {
            location.hash = '/words';
        });
        document.getElementById('see-word-list').addEventListener('click', () => {
            location.hash = '/word-list';
        });
    }
}

export default LanguageLearning;