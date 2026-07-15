const words = [
  { chinese: "你好", pinyin: "nǐ hǎo", answer: "Hello" },
  { chinese: "谢谢", pinyin: "xiè xie", answer: "Thank you" },
  { chinese: "再见", pinyin: "zài jiàn", answer: "Goodbye" },
  { chinese: "请", pinyin: "qǐng", answer: "Please" },
  { chinese: "对不起", pinyin: "duì bu qǐ", answer: "Sorry" },
  { chinese: "没关系", pinyin: "méi guān xi", answer: "It's okay" },
  { chinese: "是", pinyin: "shì", answer: "Yes / To be" },
  { chinese: "不是", pinyin: "bú shì", answer: "No / Is not" },
  { chinese: "我", pinyin: "wǒ", answer: "I / Me" },
  { chinese: "你", pinyin: "nǐ", answer: "You" },
  { chinese: "他", pinyin: "tā", answer: "He" },
  { chinese: "她", pinyin: "tā", answer: "She" },
  { chinese: "我们", pinyin: "wǒ men", answer: "We" },
  { chinese: "他们", pinyin: "tā men", answer: "They" },
  { chinese: "这", pinyin: "zhè", answer: "This" },
  { chinese: "那", pinyin: "nà", answer: "That" },
  { chinese: "哪", pinyin: "nǎ", answer: "Which" },
  { chinese: "什么", pinyin: "shén me", answer: "What" },
  { chinese: "谁", pinyin: "shéi", answer: "Who" },
  { chinese: "哪里", pinyin: "nǎ lǐ", answer: "Where" },
  { chinese: "为什么", pinyin: "wèi shén me", answer: "Why" },
  { chinese: "怎么", pinyin: "zěn me", answer: "How" },
  { chinese: "朋友", pinyin: "péng yǒu", answer: "Friend" },
  { chinese: "老师", pinyin: "lǎo shī", answer: "Teacher" },
  { chinese: "学生", pinyin: "xué sheng", answer: "Student" },
  { chinese: "学校", pinyin: "xué xiào", answer: "School" },
  { chinese: "中国", pinyin: "Zhōng guó", answer: "China" },
  { chinese: "美国", pinyin: "Měi guó", answer: "America" },
  { chinese: "人", pinyin: "rén", answer: "Person" },
  { chinese: "名字", pinyin: "míng zi", answer: "Name" },
  { chinese: "家", pinyin: "jiā", answer: "Home" },
  { chinese: "爸爸", pinyin: "bà ba", answer: "Father" },
  { chinese: "妈妈", pinyin: "mā ma", answer: "Mother" },
  { chinese: "哥哥", pinyin: "gē ge", answer: "Older brother" },
  { chinese: "姐姐", pinyin: "jiě jie", answer: "Older sister" },
  { chinese: "弟弟", pinyin: "dì di", answer: "Younger brother" },
  { chinese: "妹妹", pinyin: "mèi mei", answer: "Younger sister" },
  { chinese: "猫", pinyin: "māo", answer: "Cat" },
  { chinese: "狗", pinyin: "gǒu", answer: "Dog" },
  { chinese: "水", pinyin: "shuǐ", answer: "Water" },
  { chinese: "茶", pinyin: "chá", answer: "Tea" },
  { chinese: "饭", pinyin: "fàn", answer: "Rice / Meal" },
  { chinese: "苹果", pinyin: "píng guǒ", answer: "Apple" },
  { chinese: "今天", pinyin: "jīn tiān", answer: "Today" },
  { chinese: "明天", pinyin: "míng tiān", answer: "Tomorrow" },
  { chinese: "昨天", pinyin: "zuó tiān", answer: "Yesterday" },
  { chinese: "一", pinyin: "yī", answer: "One" },
  { chinese: "二", pinyin: "èr", answer: "Two" },
  { chinese: "三", pinyin: "sān", answer: "Three" },
  { chinese: "十", pinyin: "shí", answer: "Ten" }
];

let progressBar = document.getElementById('progress-bar');
let restartBtn = document.getElementById('restart-btn');
let gardenStage= document.getElementById('garden-stage')

let question = document.querySelector(".question");

let flowercounter = document.getElementById('flowers');
let message = document.getElementById('message');

let word = document.getElementById('word');
let pinyin = document.getElementById('pinyin');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let progress = 0;
let currentWord = 0;

let startTime = Date.now();

let speakBtn = document.getElementById('speak-btn');

function showWord() {
    word.textContent = words[currentWord].chinese;
    pinyin.textContent = words[currentWord].pinyin;
}

showWord();
loadAnswers();
updateGarden();

function checkAnswer(selectedAnswer, button) {

    if (selectedAnswer === words[currentWord].answer) {

        progress++;

        updateGarden();

        flowercounter.textContent = "Progress: " + progress + " / " + words.length;

        let percentage = (progress/words.length) * 100;

        progressBar.style.width = percentage + '%';

        message.textContent = "Correct";
        button.classList.add("correct");

        setTimeout(function () {
            button.classList.remove("correct");
        }, 300);

        currentWord++;

        if (currentWord < words.length) {

    showWord();
    loadAnswers();

} else {

    word.textContent = "🎉 Congratulations!";
    word.style.fontSize = "2rem";

    pinyin.textContent = "";

    question.style.display = "none";

    let endTime = Date.now();
    let seconds = Math.floor((endTime - startTime)/ 1000);

    message.textContent = "You finished the garden in " + seconds + " seconds!";

    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";

    speakBtn.style.display = 'none';

    restartBtn.style.display = "block";
}

} else {

    message.textContent = "Incorrect";
    button.classList.add("wrong");

    setTimeout(function () {
        button.classList.remove("wrong");
    }, 300);

}

}

function updateGarden() {

    if (progress < 10) {

        gardenStage.textContent = "Stage 1 • Seed";

    } else if (progress < 20) {

        gardenStage.textContent = "Stage 2 • Sprout";

    } else if (progress < 30) {

        gardenStage.textContent = "Stage 3 • Flower";

    } else if (progress < 40) {

        gardenStage.textContent = "Stage 4 • Young Tree";

    } else if (progress < 50) {

        gardenStage.textContent = "Stage 5 • Large Tree";

    } else {

        gardenStage.textContent = "Stage 6 • Blooming Garden";

    }

}

btn1.addEventListener("click", function () {
    checkAnswer(btn1.textContent, btn1);
});

btn2.addEventListener("click", function () {
    checkAnswer(btn2.textContent, btn2);
});

btn3.addEventListener("click", function () {
    checkAnswer(btn3.textContent, btn3);
});

btn4.addEventListener("click", function () {
    checkAnswer(btn4.textContent, btn4);
});

function loadAnswers(){
    let correctAnswer = words [currentWord].answer;

    let answers = [correctAnswer];

    while (answers.length < 4) {

        let randomIndex = Math.floor(Math.random() * words.length);

        let randomAnswer = words[randomIndex].answer;

        if (!answers.includes(randomAnswer)) {

            answers.push(randomAnswer);

        }

    }

    answers.sort(function () {
        return Math.random() - 0.5;

    });

    btn1.textContent = answers[0];
    btn2.textContent = answers[1];
    btn3.textContent = answers[2];
    btn4.textContent = answers[3];

}

speakBtn.addEventListener('click', function (){
    let speech = new SpeechSynthesisUtterance(words[currentWord].chinese)
    speech.lang = 'zh-CN';
    speech.rate = 0.8;
    speechSynthesis.speak(speech);
})

restartBtn.addEventListener("click", function () {

    progress = 0;
    currentWord = 0;

    progressBar.style.width = "0%";

    flowercounter.textContent = "Progress: " + progress + " / " + words.length;

    message.textContent = "";

    word.style.fontSize = "5rem";

    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";

    speakBtn.style.display = "block";

    restartBtn.style.display = "none";

    question.style.display = "block";

    word.textContent = "";
    pinyin.textContent = "";
    word.style.fontSize = "5rem";

    startTime = Date.now();

    showWord();
    loadAnswers();
    updateGarden();

});
