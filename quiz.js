const questions = [
    { 
        question: "I have oval, pointed leaves. My fruit is red and juicy.", 
        options: ["Tomato", "Apple", "Strawberry", "Cherry"], 
        answer: 1 // Apple
    },
    { 
        question: "I have spiny leaves and can grow in deserts.", 
        options: ["Rose", "Cactus", "Pine", "Oak"], 
        answer: 1 // Cactus
    },
    { 
        question: "I have long green leaves with yellow edges. I'm known for cleaning the air indoors.", 
        options: ["Snake Plant", "Bamboo", "Aloe Vera", "Mint"], 
        answer: 0 // Snake Plant
    },
    { 
        question: "My leaves are heart-shaped, and I have large, beautiful flowers in shades of pink or red.", 
        options: ["Rose", "Hibiscus", "Tulip", "Orchid"], 
        answer: 1 // Hibiscus
    },
    { 
        question: "I am known for my tall, thick trunk and large fan-like leaves. You might find me in tropical areas.", 
        options: ["Coconut Palm", "Maple Tree", "Oak Tree", "Pine Tree"], 
        answer: 0 // Coconut Palm
    },
    { 
        question: "My tiny white flowers bloom in clusters, and my berries turn red as they ripen.", 
        options: ["Rosemary", "Pepper", "Cinnamon", "Coffee"], 
        answer: 3 // Coffee
    },
    { 
        question: "I have small, needle-like leaves and my seeds grow in cones. I am evergreen and thrive in cold climates.", 
        options: ["Cypress", "Cedar", "Fir", "Pine"], 
        answer: 3 // Pine
    },
    { 
        question: "I am a herb with small, light green leaves that are aromatic. My leaves are often used in Italian cuisine.", 
        options: ["Basil", "Sage", "Thyme", "Oregano"], 
        answer: 0 // Basil
    },
    { 
        question: "I grow on vines and have large green leaves. My fruit is often green or purple, with a soft interior.", 
        options: ["Pumpkin", "Watermelon", "Grapes", "Cucumber"], 
        answer: 2 // Grapes
    },
    { 
        question: "I am known for my thick, fleshy leaves that contain gel. I am often used to treat burns and skin conditions.", 
        options: ["Aloe Vera", "Mint", "Lavender", "Rosemary"], 
        answer: 0 // Aloe Vera
    },
    
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 120; // 2 minutes
let answeredQuestions = 0;
let skippedQuestions = 0;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const timeDisplay = document.getElementById('time');

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `<p>${questionData.question}</p>`;
    optionsContainer.innerHTML = questionData.options.map((option, index) => 
        `<button class="option-btn" onclick="checkAnswer(${index})">${option}</button>`
    ).join('');
}

function checkAnswer(selected) {
    answeredQuestions++; // Increase answered questions count
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function skipQuestion() {
    skippedQuestions++; // Increase skipped questions count
    nextQuestion();
}

document.getElementById('skip-btn').addEventListener('click', skipQuestion);

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    document.body.innerHTML = `<div id="results-container" class="results-container">
        <h1>Quiz Complete</h1>
        <p>You answered ${answeredQuestions} out of ${questions.length} questions.</p>
        <p>Number of correct answers: ${score}</p>
        <p>Number of questions skipped: ${skippedQuestions}</p>
        <div class="fun-fact">
            <h3>Fun Fact!</h3>
            <p>Did you know that Aloe Vera is known for its ability to soothe burns and help skin heal faster?</p>
        </div>
        <button class="return-btn" onclick="goToQuizzesPage()">Go to Quizzes Page</button>
    </div>`;
}

function goToQuizzesPage() {
    window.location.href = 'quizzes.html'; // Redirect to quizzes.html page
}

window.onload = function() {
    loadQuestion();
    startTimer();
};