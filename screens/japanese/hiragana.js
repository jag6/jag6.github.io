import { pageTitle } from "../../utils.js";
import { practiceHiragana } from "../../helpers/language-learning.js";

const Hiragana = {
    render: () => {
        pageTitle.textContent = '日本語の練習';
        return `
            <section id="language-practice-header" class="language-practice-header"><h1>平仮名の練習❕</h1></section>
            <div id="language-practice-content">
                <div class="language-practice-container practice-hiragana-container">
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
                </div>
            </div>
        `;
    },
    after_render: () => {
        practiceHiragana();
    }
}

export default Hiragana;