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
    ['ceiling', '天井', 'てんじょう']
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
    const practiceForm = document.querySelectorAll('form')[0];
    const hiragana = document.getElementById('hiragana');
    const randomWord =  document.getElementById('random-word');

    const checkHiragana = () => {
        document.getElementById('yes-no').textContent = '';
        practiceForm.reset();
        hiragana.focus();

        words = shuffle(words);
        let key = words[0][1];
        let value = words[0][2];

        randomWord.textContent = key;

        const showCommendationAndTimeout = (commendation, hiragana, value) => {
            showCommendation(commendation, hiragana, value);
            setTimeout(() => {
                checkHiragana();
            }, 1500);
        }

        practiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(hiragana.value === value) {
                showCommendationAndTimeout(commendation);
            }else {
                showCommendationAndTimeout(commendation, hiragana, value);
            }
        });
    }
    checkHiragana();
};


// 定義の練習
export const practiceDefinitions = () => {
    const wordsUl = document.getElementById('words');
    const definition = document.getElementById('definition');

    const checkDefinition = () => {
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
    }
    checkDefinition();
};