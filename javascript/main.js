
// Array of objects containing the questions, options and answers
const quizInfo = [
    {
      id: 1,
      question: "What is the capital of India?",
      a: "Mumbai",
      b: "Delhi",
      c: "Chennai",
      d: "Kolkata",
      correct: "b",
     },
    {
      id: 2,
      question: "Who is the current Prime Minister of India?",
      a: "Narendra Modi",
      b: "Rahul Gandhi",
      c: "Manmohan Singh",
      d: "Sonia Gandhi",
      correct: "a",
    },
    {
      id: 3,
      question: "Who is the current President of India?",
      a: "Ram Nath Kovind",
      b: "Pranab Mukherjee",
      c: "Rahul Gandhi",
      d: "Sonia Gandhi",
      correct: "a",
    },
    {
      id: 4,
      question: "Who is the current Chief Minister of Maharashtra?",
      a: "Uddhav Thackeray",
      b: "Devendra Fadnavis",
      c: "Rahul Gandhi",
      d: "Sonia Gandhi",
      correct: "a",
    },
  ];
  // declare vars
let question = document.getElementById("questions");
let answerA = document.getElementById("first_text");
let answerB = document.getElementById("second_text");
let answerC = document.getElementById("third_text");
let answerD = document.getElementById("fourth_text");
let correctAnswer = document.getElementById("correct-answer");
window.onload = (event) => {
 answerA.innerText = 'Ready';
  answerB.innerText = 'To';
  answerC.innerText = 'Rumble';
  answerD.innerText = 'Chump?';
};
// declare radiobuttons
let radioA = document.getElementById("first");
let radioB = document.getElementById("second");
let radioC = document.getElementById("third");
let radioD = document.getElementById("fourth");
let score = 0;
function fillQuestion(number){
quizInfo.forEach((element) => {
  if(element.id == number){
    question.innerText = element.question;
    answerA.innerText = element.a;
    answerB.innerText = element.b;
    answerC.innerText = element.c;
    answerD.innerText = element.d;
    correctAnswer.value = element.correct;
  }
});
  }
function getAnswer(){
let questionNumber = form.dataset.value;
questionNumber = questionNumber +1;
    if(form.dataset.value == 2){
      correctAnswer = 'b';
      if(radioB.checked){
        score = score + 1;
     alert("Correct Answer");
      } else(alert("Wrong Answer"));
    } 
    else if(form.dataset.value == 3){
      correctAnswer = 'a';

      if(radioA.checked){
        score = score + 1;
        alert("Correct Answer");
      } else(alert("Wrong Answer"));
    } 
    else if(form.dataset.value == 4){
      correctAnswer = 'a';
      if(radioA.checked){
        score = score + 1;
        alert("Correct Answer");
      } else(alert("Wrong Answer"));
    } 
   else if(form.dataset.value == 5){
      correctAnswer = 'a';
      if(radioA.checked){
        score = score + 1;
        alert("Correct Answer");
      } else(alert("Wrong Answer"));
    } 
    else if(form.dataset.value == 6){
      question.innerText = 'Congratulations'
      answerA.innerText = "Yay"
      answerB.innerText = "You"
      answerC.innerText = "Completed"
      answerD.innerText = "The quiz"
    alert("Quiz Completed");
    alert("Your Score is " + score + " out of 4");
    }
  }
  

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.dataset.value = Math.floor(form.dataset.value) + 1;
fillQuestion(form.dataset.value)
getAnswer();
});

