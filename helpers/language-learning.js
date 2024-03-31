import { showMessage } from "../utils.js";

let learnedWords = [
    ['maintain', '保つ', 'たもつ'],
    ['praise', '褒める', 'ほめる'],
    ['advise', '勧める', 'すすめる'],
    ['admit', '認める', 'みとめる'],
    ['sad', '悲しい', 'かなしい'],
    ['celebration', 'お祝', 'おいわい'],
    ['stay up all night', '徹夜する', 'てつやする', 'てつや'],
    ['ceiling', '天井', 'てんじょう'],
    ['roof', '屋根', 'やね'],
    ['shallow', '浅い', 'あさい', 'あさ'],
    ['save', '貯める', 'ためる', 'た'],
]

let words = [
    ['prevent', '防ぐ', 'ふせぐ', 'ふせ'],
    ['tornado', '竜巻', 'たつまき'],
    ['cloudy', '曇り', 'くもり', 'くも'],
    ['tears', '涙', 'なみだ'],
    ['stay up late', '夜更かしする', 'よふかしする', 'よふ'],
    ['oversleep', '寝坊する', 'ねぼうする', 'ねぼう'],
    ['lazy', 'だらしない', 'だらしない'],
    ['fog', '霧', 'きり'],
    ['harbor', '港', 'みなと'],
    ['lake', '湖', 'みずうみ'],
    ['tidy up', '片付ける', 'かづける', 'かづ'],
    ['catch', '捕まえる', 'つかまえる', 'つか'],
    ['hill, slope', '坂', 'さか'],
    ['dead end', '行き止まり', 'いきどまり', 'い ど'],
    ['muggy', '蒸し暑い', 'むしあつい', 'む あつ'],
    ['rare', '珍しい', 'めずらしい', 'めずら'],
    ['pretend', 'ふりをする', 'ふりをする'],
    ['be born', '産(生)まれる', 'うまれる', 'う'],
    ['be worth doing', 'やりがいを感じる', 'やりがいをかんじる', ' かん'],
    ['lose', '失う', 'うしなう', 'うし'],
    ['misunderstand', '勘違いする', 'かんちがいする', 'かんちが'],
    ['get dirty', '汚れる', 'よごれる', 'よご'],
    ['wrap, cover/engulf', '包む', 'つつむ', 'つつ'],
    ['desired, missed/nostalgic', '懐かしい', 'なつかしい', 'なつ'],
    ['catch(fish)', '釣る', 'つる', 'つ'],
    ['shoulder', '肩', 'かた'],
    ['sunset', '夕焼け', 'ゆうやけ', 'ゆうや'],
    ['overlap, pile up', '重なる', 'かさなる', 'かさ'],
    ['turn away, chase off', '追い返す', 'おいかえす', 'お かえ'],
    ['strike, knock, beat(drum)', '叩く', 'たたく', 'たた'],
    ['complain, appeal, resort to', '訴える', 'うったえる', 'うった'],
    ['impel, drive', '切っ掛けに', 'きっかけに'],
    ['insult, bad mouth', '悪口を言う', 'わるぐちをいう', 'わるぐち い'],
    ['stock price', '株価', 'かぶか'],
    ['stock market', '株式市場', 'かぶしきしじょう'],
    ['noise', '騒音', 'そうおん'],
    ['hiding place, refuge', '隠れ家', 'かくれが', 'かく が'],
    ['hold(arms), have(problems)', '抱える', 'かかえる', 'かか'],
    ['lose, get rid of', '無くす', 'なくす', 'な'],
    ['get sick/intoxicated', '酔う', 'よう', 'よ'],
    ['tell a secret/leak info', 'ばらす', 'ばらす'],
    ['complain', '文句を言う', 'もんくをいう', 'もんく い'],
    ['hide (oneself)', '隠れる', 'かくれる', 'かく'],
    ['electric fan', '扇風機', 'せんぷうき'],
    ['lottery', '宝くじ', 'たからくじ', 'たから'],
    ['bustling, lively', '賑やか', 'にぎやか', 'にぎ'],
    ['ratio, percentage', '割合', 'わりあい'],
    ['calm down', '落ち着く', 'おちつく', 'お つ'],
    ['melt', '溶ける', 'とける', 'と'],
    ['missing(person)', '行方不明', 'ゆくえふめい'],
    ['sled', 'そり', 'そり'],
    ['pet owner', '飼い主', 'かいぬし', 'か ぬし'],
    ['hug', '抱く', 'だく', 'だ'],
    ['protagonist', '主人公', 'しゅじんこう'],
    ['dig', '掘る', 'ほる', 'ほ'],
    ['fold, close(shop)', '畳む', 'たたむ', 'たた'],
    ['pillar', '柱', 'はしら'],
    ['wave one\'s hands', '手を振る', 'てをふる', 'て ふ'],
    ['稻田', '田んぼ', 'たんぼ', 'た'],
    ['田地', '畑', 'はたけ'],
    ['collapse, break down', '崩れる', 'くずれる', 'くず'],
    ['swell, get excited', '盛り上がる', 'もりあがる', 'も あ'],
    ['seed', '種', 'たね'],
    ['intense', '激しい', 'はげしい', 'はげ'],
    ['rob', '奪う', 'うばう', 'うば'],
    ['driver', '運転手', 'うんてんしゅ'],
    ['spread, layout', '敷く', 'しく', 'し'],
    ['appear, express', '表す', 'あらわす', 'あらわ'],
    ['count', '数える', 'かぞえる', 'かぞ'],
    ['soft, tender', '柔らかい', 'やわらかい', 'やわ'],
    ['fine, minute', '細かい', 'こまかい', 'こま'],
    ['raise, develop', '育てる', 'そだてる', 'そだ'],
    ['entrust, deposit', '預ける', 'あずける', 'あず'],
    ['depart, split up', '別れる', 'わかれる', 'わか'],
    ['fire a gun', '銃を撃つ', 'じゅうをうつ', 'じゅう う'],
    ['suspect', '容疑者', 'ようぎしゃ'],
    ['lid, cap', '蓋', 'ふた'],
    ['fall down', '転ぶ', 'ころぶ', 'ころ'],
    ['bump', 'ぶつかる', 'ぶつかる'],
    ['apologize', '謝る', 'あやまる', 'あやま'],
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
                    <input type="text" name="japanese" id="japanese" required autofocus>
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
        const toggleRuby = document.getElementById('toggle-ruby');
        toggleRuby.addEventListener('click', () => {
            if(!furigana || furigana == '') {
                document.cookie = 'furigana=' + JSON.stringify('clicked') + ';domain=;path=/;secure;http-only;samesite=lax;';
            }else {
                document.cookie = 'furigana=' + JSON.stringify('') + ';domain=;path=/;secure;http-only;samesite=lax;';
            }
            const ruby = document.querySelectorAll('ruby');
            ruby.forEach((r) => {
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
            const p = document.createElement('p');
            const ruby = document.createElement('ruby');
            p.textContent = word[1];
            p.setAttribute('chosen-word', word[0]);
            if(!furigana || furigana == '') {
                if(word[1] === word[2]) {
                    ruby.textContent = '';
                }else if(!word[3]) {
                    ruby.textContent = word[2];      
                }else {
                    ruby.textContent = word[3];
                }
            }
            li.appendChild(ruby);
            li.appendChild(p);
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
                const def = word.querySelector('p');
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