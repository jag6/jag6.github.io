import { showMessage } from "../utils.js";

let words = [
    ['prevent', '防ぐ', 'ふせぐ'],
    ['maintain', '保つ', 'たもつ'],
    ['praise', '褒める', 'ほめる'],
    ['advise', '勧める', 'すすめる'],
    ['admit', '認める', 'みとめる'],
    ['sad', '悲しい', 'かなしい'],
    ['celebration', 'お祝', 'おいわい'],
    ['tornado', '竜巻', 'たつまき'],
    ['cloudy', '曇り', 'くもり'],
    ['tears', '涙', 'なみだ'],
    ['stay up late', '夜更かしする', 'よふかしする'],
    ['oversleep', '寝坊する', 'ねぼうする'],
    ['stay up all night', '徹夜する', 'てつやする'],
    ['lazy', 'だらしない', 'だらしない'],
    ['ceiling', '天井', 'てんじょう'],
    ['fog', '霧', 'きり'],
    ['harbor', '港', 'みなと'],
    ['lake', '湖', 'みずうみ'],
    ['tidy up', '片付ける', 'かづける'],
    ['catch', '捕まえる', 'つかまえる'],
    ['shallow', '浅い', 'あさい'],
    ['shore', '岸', 'きし'],
    ['roof', '屋根', 'やね'],
    ['hill, slope', '坂', 'さか'],
    ['dead end', '行き止まり', 'いきどまり'],
    ['muggy', '蒸し暑い', 'むしあつい'],
    ['save', '貯める', 'ためる'],
    ['rare', '珍しい', 'めずらしい'],
    ['pretend', 'ふりをする', 'ふりをする'],
    ['be born', '産(生)まれる', 'うまれる'],
    ['be worth doing', 'やりがいを感じる', 'やりがいをかんじる'],
    ['lose', '失う', 'うしなう'],
    ['misunderstand', '勘違いする', 'かんちがいする'],
    ['get dirty', '汚れる', 'よごれる'],
    ['wrap, cover/engulf', '包む', 'つつむ'],
    ['desired, missed/nostalgic', '懐かしい', 'なつかしい'],
    ['catch(fish)', '釣る', 'つる'],
    ['shoulder', '肩', 'かた'],
    ['sunset', '夕焼け', 'ゆうやけ'],
    ['overlap, pile up', '重なる', 'かさなる'],
    ['turn away, chase off', '追い返す', 'おいかえす'],
    ['strike, knock, beat(drum)', '叩く', 'たたく'],
    ['complain, appeal, resort to', '訴える', 'うったえる'],
    ['impel, drive', '切っ掛けに', 'きっかけに'],
    ['insult, bad mouth', '悪口を言う', 'わるぐちをいう'],
    ['stock price', '株価', 'かぶか'],
    ['stock market', '株式市場', 'かぶしきしじょう'],
];

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
                    <input type="text" name="hiragana" id="hiragana" required autofocus>
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


// 定義の練習
export const practiceDefinitions = () => {
    const wordsUl = document.getElementById('words');
    const definition = document.getElementById('definition');

    const checkDefinition = () => {
        if(words.length < 6) {
            const errorMessage = 'Not enough vocab words.\nAdd more to play the game.';
            showMessage(errorMessage);
            console.log(errorMessage);
            return;
        }
        
        wordsUl.innerHTML = '';
        document.getElementById('yes-no').textContent = '';

        shuffle(words);
        let wordPool = [];
        for(let i = 0; i < 6; i++) {
            let word = words[i];
            wordPool.push(word);
            const li = document.createElement('li');
            li.classList.add('word');
            li.textContent = word[1];
            li.setAttribute('definition', word[0]);
            wordsUl.appendChild(li);
        }

        wordPool = shuffle(wordPool);
        let wordDefinition = wordPool[0][0];
        let wordKanji = wordPool[0][1];
        definition.textContent = wordDefinition; 

        const showCommendationAndTimeout = (commendation, wordKanji, wordDefinition) => {
            showCommendation(commendation, wordKanji, wordDefinition);
            setTimeout(() => {
                checkDefinition();
            }, 1500);
        }

        const wordsLi = document.querySelectorAll('.word');
        wordsLi.forEach((word) => {
            word.addEventListener('click', () => {
                let value = word.getAttribute('definition');
                if(wordDefinition === value) {
                    showCommendationAndTimeout(commendation)
                }else {
                    showCommendationAndTimeout(commendation, wordDefinition, wordKanji);
                }
            });
        });
    };
    checkDefinition();
};