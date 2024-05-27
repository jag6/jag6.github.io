import { showMessage } from "../../utils.js";
import { vocab } from "./vocab.js";

let words = vocab;

const shuffle = (array) => {
    let currentIndex = array.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};

let commendation = ['正しい！', 'はい、正解です！', '凄い！', '頭が良い！']; 

const showCommendation = (commendation, key, value) => {   
    shuffle(commendation);
    if(key === value) {
        document.getElementById('yes-no').textContent = (commendation[0]);
    }else {
        document.getElementById('yes-no').textContent = ' --- ' + value;
    }
}

// 平仮名の練習
export const practiceHiragana = () => {
    const renderForm = () => {
        const practiceContainer = document.getElementById('practice-hiragana-container');
        practiceContainer.innerHTML = '';
        practiceContainer.innerHTML = `
            <div>
                <p id="random-word"></p>
                <p id="yes-no"></p>    
            </div>
            <form>
                <div>
                    <label for="hiragana">平仮名</label>
                    <input type="text" name="hiragana" id="hiragana" autocomplete="off" required autofocus>
                </div>
                <div>
                    <button id="hiragana-practice-form-btn" type="submit" aria-label="Check Hiragana Button">SUBMIT</button>
                </div>
            </form>
        `;
    };

    const checkHiragana = () => {
        if(words.length === 0) {
            const errorMessage = 'No vocab words.\nAdd some to play the game.';
            showMessage(errorMessage);
            console.log(errorMessage);
            return;
        }

        renderForm();
        const hiragana = document.getElementById('hiragana');
        const randomWord =  document.getElementById('random-word');
        hiragana.focus();

        words = shuffle(words);
        let key = words[0][1];
        let value = words[0][2];
        randomWord.textContent = key;

        const showCommendationAndTimeout = (commendation, hiragana, value) => {
            showCommendation(commendation, hiragana, value);
            practiceFormBtn.setAttribute('disabled', '');
            practiceFormBtn.classList.add('disabled');
            setTimeout(() => {
                checkHiragana();
            }, 1500);
        }

        const practiceFormBtn = document.getElementById('hiragana-practice-form-btn');
        practiceFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(hiragana.value === value) {
                showCommendationAndTimeout(commendation);
            }else {
                showCommendationAndTimeout(commendation, hiragana, value);
            }
        });
    };
    checkHiragana();
};

// 日本語の練習
export const practiceJapanese = () => {
    const renderForm = () => {
        const practiceContainer = document.getElementById('practice-japanese-container');
        practiceContainer.innerHTML = '';
        practiceContainer.innerHTML = `
            <div>
                <p id="random-word"></p>
                <p id="yes-no"></p>    
            </div>
            <form>
                <div>
                    <label for="japanese">日本語</label>
                    <input type="text" name="japanese" id="japanese" autocomplete="off" required autofocus>
                </div>
                <div>
                    <button id="japanese-practice-form-btn" type="submit" aria-label="Check Japanese Button">SUBMIT</button>
                </div>
            </form>
        `;
    };

    const checkJapanese = () => {
        if(words.length === 0) {
            const errorMessage = 'No vocab words.\nAdd some to play the game.';
            showMessage(errorMessage);
            console.log(errorMessage);
            return;
        }

        renderForm();
        const japanese = document.getElementById('japanese');
        const randomWord =  document.getElementById('random-word');
        japanese.focus();

        words = shuffle(words);
        let key = words[0][0];
        let value = words[0][1];
        randomWord.textContent = key;

        const showCommendationAndTimeout = (commendation, japanese, value) => {
            showCommendation(commendation, japanese, value);
            practiceFormBtn.setAttribute('disabled', '');
            practiceFormBtn.classList.add('disabled');
            setTimeout(() => {
                checkJapanese();
            }, 1500);
        }

        const practiceFormBtn = document.getElementById('japanese-practice-form-btn');
        practiceFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if(japanese.value === value) {
                showCommendationAndTimeout(commendation);
            }else {
                showCommendationAndTimeout(commendation, japanese, value);
            }
        });
    };
    checkJapanese();
}

// 定義の練習
export const practiceWords = () => {
    const wordsUl = document.getElementById('words');
    const chosenWord = document.getElementById('chosen-word');

    const checkWord = () => {
        if(words.length < 6) {
            const errorMessage = 'Not enough vocab words.\nAdd more to play the game.';
            showMessage(errorMessage);
            console.log(errorMessage);
            return;
        }
        
        wordsUl.innerHTML = '';
        document.getElementById('yes-no').textContent = '';

        // toggle furigana and get/set cookie
        const getCookie = (name) => {
            let cookieArr = document.cookie.split(';');
            for (let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].split('=');
                if(name == cookiePair[0].trim()) {
                    return decodeURIComponent(cookiePair[1]);
                }
            }
            return null;
        };
        let furigana = JSON.parse(getCookie('furigana'));
        const toggleRt = document.getElementById('toggle-rt');
        toggleRt.addEventListener('click', () => {
            if(!furigana || furigana == '') {
                document.cookie = 'furigana=' + JSON.stringify('clicked') + ';domain=;path=/;secure;http-only;samesite=lax;';
            }else {
                document.cookie = 'furigana=' + JSON.stringify('') + ';domain=;path=/;secure;http-only;samesite=lax;';
            }
            const rt = document.querySelectorAll('rt');
            rt.forEach((r) => {
                r.classList.toggle('clicked');
                window.location.reload();
            });
        });

        // display words and check definition
        shuffle(words);
        let wordPool = [];
        for(let i = 0; i < 6; i++) {
            let word = words[i];
            wordPool.push(word);
            const li = document.createElement('li');
            li.classList.add('word');
            const ruby = document.createElement('ruby');
            const rt = document.createElement('rt');
            ruby.textContent = word[1];
            ruby.setAttribute('chosen-word', word[0]);
            if(!furigana || furigana == '') {
                if(word[1] === word[2]) {
                    rt.textContent = '';
                }else if(!word[3]) {
                    rt.textContent = word[2];      
                }else {
                    rt.textContent = word[3];
                }
            }
            li.appendChild(rt);
            li.appendChild(ruby);
            wordsUl.appendChild(li);
        }

        wordPool = shuffle(wordPool);
        let wordDefinition = wordPool[0][0];
        let wordKanji = wordPool[0][1];
        chosenWord.textContent = wordDefinition; 

        const showCommendationAndTimeout = (commendation, wordKanji, wordDefinition) => {
            showCommendation(commendation, wordKanji, wordDefinition);
            setTimeout(() => {
                checkWord();
            }, 1500);
        }
        const wordsLi = document.querySelectorAll('.word');
        wordsLi.forEach((word) => {
            word.addEventListener('click', () => {
                const def = word.querySelector('ruby');
                let value = def.getAttribute('chosen-word');
                if(wordDefinition === value) {
                    showCommendationAndTimeout(commendation)
                }else {
                    showCommendationAndTimeout(commendation, wordDefinition, wordKanji);
                }
            });
        });
    };
    checkWord();
};