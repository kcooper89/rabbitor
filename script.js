var questions = [
    {
    question: "HTML is an acronym for?",
    choices: ["Hyper-Text Markup Language", "How To Make Lasagna", "Hyper-Texting Marking Language","Hyper-Text Markup Linguistics"],
    Answer: "Hyper-Text Markup Language",
    }, 
    {
    question: "CSS is an acronym for?",
    choices: ["California Super Soaker", "Cascade Styling Sheets", "Cascading Style Sheets", "Cascading Styling Sheet"],
    Answer: "Cascading Style Sheets",
    
    }, 
    {
    question: "When in doubt:",
    choices: ["Give up", "Google-fu!", "Choose another career", "Did I leave the oven on?"],
    Answer: "Google-fu!",
    },
    {
    question: "What is the default CSS positioning?",
    choices: ["Relative", "Absolute", "In-line", "Static"],
    Answer: "Static",
    },
    {
    question: "Bootstrap allows for:",
    choices: ["Responsive Web Layouts", "Unresponsive Web Layouts", "Hyper Web Layouts", "Slow Web Layouts"],
    Answer: "Responsive Web Layouts",
    },
];


var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

var questionIndex = 0;
var correctCount = 0;

var time = 30;
var intervalId;



function endQuiz() {
    timerEl.innerHTML = "0";
    clearInterval(intervalId);
    var body = document.body;
    Score.innerHTML = "GAME OVER, You scored " + correctCount + " out of 5";
  }
  
function updateTime() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }

function renderQuestion() {
  
    if (time == 0) {
      updateTime();
      return;
    }

  
    intervalId = setInterval(updateTime, 1000);
    
    questionEl.textContent = questions[questionIndex].question;
  
    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";
    
  
    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;
  
    for (var i = 0; i < choicesLenth; i++) {
      var questionListItem = document.createElement("button");
      questionListItem.textContent = choices[i];
      optionListEl.append(questionListItem);
      //button.innerHTML += "<id=button"+i;" >"
    }
  }
  
  function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
      time = 0;
    }
    renderQuestion();
  }
  
  function checkAnswer(event) {
    clearInterval(intervalId);
    if (event.target.matches("button")) {
      var answer = event.target.textContent;
      if (answer === questions[questionIndex].Answer) {
        questionResultEl.textContent = "Correct";
        correctCount++;
        time = time + 3;
      } else {
        questionResultEl.textContent = "Incorrect";
        time = time - 2;
        timerEl.textContent = time;
      }
    }
    setTimeout(nextQuestion, 2000);
  }
  
  renderQuestion();
  optionListEl.addEventListener("click", checkAnswer);
  

//btn-1.innerHTML = "<h3>" + "hello" + "</h3>";

//send test status
//send back question along with the answers
//capture user input + test after submitting
//check to see if there are any questions left
//grade them
//submit back grade


//add timer 

