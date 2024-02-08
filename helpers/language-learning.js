let words = [
    ['prevent', '防ぐ', 'ふせぐ'],
    ['maintain', '保つ', 'たもつ'],
    ['praise', '褒める', 'ほめる'],
    ['advise', '勧める', 'すすめる'],
    ['admit', '認める', 'みとめる'],
    ['sad', '悲しい', 'かなしい'],
    ['celebration', 'お祝', 'おいわい'],
    ['tornado', '竜巻', 'たつまき'],
    ['cloudy', '曇り', 'くもり']
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

let commendationWhenRight = ['正しい！', 'はい、正解です！', '凄い！', '頭が良い！']; 
let commendationWhenWrong = ['Close, but no cigar', 'Try again', 'Come on, this is easy'];

const showCommendation = (commendation, key, value) => {   
    shuffle(commendation);
    if(key === value) {
        document.getElementById('yes-no').textContent = (commendation[0]);
    }else {
        document.getElementById('yes-no').textContent = (commendation[0]) + ' --- ' + value;
    }
}

// 平仮名の練習
export const practiceHiragana = () => {
    const practiceForm = document.querySelectorAll('form')[0];
    const hiragana = document.getElementById('hiragana');
    const randomWord =  document.getElementById('random-word');

    const checkHiragana = () => {
        document.getElementById('yes-no').textContent = "";
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
                showCommendationAndTimeout(commendationWhenRight);
            }else {
                showCommendationAndTimeout(commendationWhenWrong, hiragana, value);
            }
        });
    }
    checkHiragana();
};


// 定義の練習
shuffle(words);
for(let i = 0; i < 5; i++) {
    let word = words[i];
    console.log(word);
}
console.log(words)