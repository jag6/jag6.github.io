import { practiceHiragana } from "../helpers/language-learning.js";
import { pageTitle } from "../utils.js";

const LanguageLearning = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header"><h1>どちがいい？</h1></section>
            <div id="language-practice-options-container">
                <div class="language-practice-options">
                    <div id="practice-hiragana" class="language-practice-option">
                        <p>平仮名</p>          
                    </div>
                    <div id="practice-definitions" class="language-practice-option">
                        <p>定義の練習</p>          
                    </div>
                </div>
            </div>
            <section class="language-practice-container practice-hiragana-container">
                <div>
                    <p id="random-word"></p>
                    <p id="yes-no"></p>    
                </div>
                <form>
                    <div>
                        <label for="hiragana">平仮名</label>
                        <input type="text" name="hiragana" id="hiragana" required autofocus>
                    </div>
                    <div>
                        <button type="submit" aria-label="Check Hiragana Button">SUBMIT</button>
                    </div>
                </form>
            </section>
            <section class="practice-definitions-container">
                <h2>Coming Soon...</h2>
            </section>
        `;
    },
    after_render: () => {
        const languagePracticeH1 = document.getElementById('language-practice-header');

        const selectLanguagePracticeOption = (characters, word) => {
            document.getElementById('language-practice-options-container').remove();
            languagePracticeH1.querySelector('h1').textContent = `${characters}の練習❕`;
            document.querySelector(`.practice-${word}-container`).style.display = 'flex';
        }
        document.getElementById('practice-hiragana').addEventListener('click', () => {
            selectLanguagePracticeOption('平仮名', 'hiragana');
        });
        document.getElementById('practice-definitions').addEventListener('click', () => {
            selectLanguagePracticeOption('定義', 'definitions');
        });
        
        practiceHiragana();
    }
}

export default LanguageLearning;