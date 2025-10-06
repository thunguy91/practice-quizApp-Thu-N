const questions = [
    {
    question: "Question 1: What year did the Fire Nation battle the Air Nomad Army?",
    answers: ["1325 ", "1100", "The Air Nomads did not have a formal military", "1703"],
    correct: 2
},
{
    question: "What does DOM stand for?",
    answers: ["Document Object Model", "Document Overhaul Marker", "Document Object Manual", "Document Object Markup"],
    correct: 0
},
{
    question: "What is the capital of Missouri?",
    answers: ["St. Louis", "Columbia", "Springfield", "Jefferson City"],
    correct: 3
},
{
    question: "What is the best season?",
    answers: ["Spring", "Summer", "Fall", "Winter"],
    correct: 2
}];

let currentQuestionIndex = 0;
let score = 0;

const question = document.getElementById('question');
const answerBtn = document.querySelectorAll('.answerbtn');
const feedbackMsg = document.getElementById('feedback');
const nextQuestBtn = document.getElementById('nextQuestionBtn');

loadQuestion();

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    feedbackMsg.textContent = '';

    answerBtn.forEach((btn,index)=> {
        btn.textContent = currentQuestion.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = '';
    });
}

answerBtn.forEach((btn,index) => {
    btn.addEventListener('click', () => {
        checkAnswer(index);
    });
});

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctIndex = currentQuestion.correct;

  answerBtn.forEach(btn => (btn.disabled = true));

  if (selectedIndex === correctIndex){
    feedbackMsg.textContent = "Correct!";
    score++;
  } else {
    feedbackMsg.textContent = "Incorrect!";
  }
}

nextQuestBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  question.textContent = `Quiz complete! You scored ${score} out of ${questions.length}.`;
  feedbackMsg.textContent = '';
  answerBtn.forEach(btn => {
    btn.style.display = 'none';
  });
  nextQuestBtn.style.display = 'none';
}









// function loadQuestion(){
//     const q = questions[currentQuestionIndex];
//   question.textContent = q.question;
//   answerBtn.forEach((btn, i) => {
//     btn.textContent = q.answers[i];
//     btn.disabled = false;
//     btn.style.backgroundColor = "";
//   });
//   feedbackMsg.textContent = "";
//   nextQuestBtn.style.display = "none";
// }

// function handleAnswerClick(e) {
//   const selectedIndex = Array.from(answerBtn).indexOf(e.target);
//   const correctIndex = questions[currentQuestionIndex].correct;

//   if (selectedIndex === correctIndex) {
//     feedbackMsg.textContent = "✅ Correct!";
//     e.target.style.backgroundColor = "lightgreen";
//   } else {
//     feedbackMsg.textContent = "❌ Wrong!";
//     e.target.style.backgroundColor = "lightcoral";
//     answerBtn[correctIndex].style.backgroundColor = "lightgreen";
//   }
//   answerBtn.forEach(btn => btn.disabled = true);
//   nextQuestBtn.style.display = "inline-block";
// }

// function handleNextClick() {
//   currentIndex++;
//   if (currentQuestionIndex < questions.length) {
//     loadQuestion();
//   } else {
//     question.textContent = "🎉 Quiz Finished!";
//     document.querySelector(".answers").style.display = "none";
//     feedbackMsg.textContent = "";
//     nextQuestBtn.style.display = "none";
//   }
// }
// answerBtn.forEach(btn => btn.addEventListener("click", handleAnswerClick));
// nextQuestBtn.addEventListener("click", handleNextClick);

// loadQuestion();







// function loadQuestion() {
//   const q = questions[currentQuestionIndex];
//   questionOne.textContent = q.question;
//   answers.forEach((btn, i) => {
//     btn.textContent = q.answers[i];
//     btn.disabled = false;
//     btn.style.backgroundColor = "";
//   });
//   feedbackMessage.textContent = "";
//   nextButton.style.display = "none";
// }





// const answers = document.querySelectorAll('answer');

// const nextButton = document.getElementById('nextQuestionBtn');

// const feedbackMessage = document.getElementById('feedback');

// const userAnswer = document.getElementById('answer').value;

// function loadQuestion() {
//     questionOne.innerHTML = question[current.question];
// }

// answers.addEventListener('click', event => {
//     if (questions[correct] === userAnswer) {
//         event.preventDefault();
//         feedbackMessage.innerHTML = "That is the correct answer!";
//     }
//     feedbackMessage.innerHTML = "Incorrect";
// });