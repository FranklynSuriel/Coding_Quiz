var body = document.body;
var questionsContainer = document.createElement("div");
var question = document.createElement("h1");
var title = document.createElement("h1");
var description = document.createElement("p");
var startQuiz = document.createElement("button");
var timerResult = document.createElement("h2");
var initials = document.createElement("form");
var timeEl = document.getElementById("time");


// Create ordered list element
var listEl = document.createElement("ol");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var but1 = document.createElement("button");
var but2 = document.createElement("button");
var but3 = document.createElement("button");
var but4 = document.createElement("button");
var buttons = [but1, but2, but3, but4];

title.textContent = "Coding Quiz Challenge";
description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!."

body.appendChild(title);
body.appendChild(description);
body.appendChild(startQuiz);



startQuiz.textContent = "Start Quiz";

var secondsLeft = 60;
var secondsShows = 2;

startQuiz.addEventListener("click", function(){
    
  body.appendChild(questionsContainer);
  questionsContainer.appendChild(question);

  questionsContainer.appendChild(li1);
  questionsContainer.appendChild(li2);
  questionsContainer.appendChild(li3);
  questionsContainer.appendChild(li4);

  li1.appendChild(but1);
  li2.appendChild(but2);
  li3.appendChild(but3);
  li4.appendChild(but4);
    
  questionsContainer.appendChild(timerResult);
  questionsContainer.appendChild(initials);
  // initials.appendChild(form);

  // Clear the following elements from the screen
  startQuiz.style.display = "none";
  title.textContent = "";
  description.textContent = "";
    

  var score = 0;
  var currentQustion = 0;
  var selectedAnswer;
  var correctAnswer;

  var newQuestions = [
    {
      'text': "A very usefull tool used during development and debugging for printing content to the degugger is:",
      'answer1': "JavaScript",
      'answer2': "terminal/bash",
      'answer3': "for loops",
      'answer4': "console.log",
      'correctAnswer': "console.log",
    },
    {
      'text': "The Capital of New jersey is :",
      'answer1': "Trenton",
      'answer2': "Jersey City",
      'answer3': "Manhattan",
      'answer4': "New York",
      'correctAnswer': "Trenton",
    },
    {
      'text': "CSS is used for :",
      'answer1': "Decoration",
      'answer2': "Style",
      'answer3': "Photo App",
      'answer4': "Script",
      'correctAnswer': "Style",
    },
    {
      'text': "HTML is used for :",
      'answer1': "Decoration",
      'answer2': "Style",
      'answer3': "Photo App",
      'answer4': "Display content in a browser",
      'correctAnswer': "Display content in a browser",
    }
  ];
    
  function FillContent(newQuestion) {
    question.textContent = newQuestion['text'];
    but1.textContent = newQuestion['answer1'];
    but2.textContent = newQuestion['answer2'];
    but3.textContent = newQuestion['answer3'];
    but4.textContent = newQuestion['answer4'];
    correctAnswer = newQuestion['correctAnswer'];
    
  }

  FillContent(newQuestions[currentQustion])
    
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      selectedAnswer = button.textContent;
    
      if (selectedAnswer === correctAnswer) {
        score++;
        currentQustion++;
        console.log("good");
        secondsShows = 2;
        answerResult("Correct Answer");
        
    
    
      } else {
        currentQustion++;
        console.log("wrong answer");
        secondsLeft -= 10;
        secondsShows = 2;
        answerResult("Wrong Answer");
        
      }
    
      if (currentQustion < newQuestions.length) {
        FillContent(newQuestions[currentQustion]);
    
      }else {
        clearInterval(timerInterval);
        question.textContent = "";
        but1.hidden = true;
        but2.hidden = true;
        but3.hidden = true;
        but4.hidden = true;
        li1.hidden = true;
        li2.hidden = true;
        li3.hidden = true;
        li4.hidden = true;
        scoreboard();
        timerResult.textContent = "";
        
      }
    
      
    
    })
  });
   
  function answerResult(result) {
    var timerAnswer = setInterval(function() {
      secondsShows--;
      timerResult.textContent = result;
      
      if (secondsShows === 0) {
        // Stops execution of action at set interval
        clearInterval(timerAnswer);
        timerResult.textContent = "";
        
      }
      
    }, 1000);
    
  }
  
  function scoreboard() {
    // create form variables
    var finalScore = score * 10;
    var form = document.createElement("form");
    var formLabel = document.createElement("label");
    var initials = document.createElement("input");
    var submit = document.createElement("button");

    //append elements
    questionsContainer.appendChild(form);
    form.appendChild(formLabel);
    form.appendChild(initials);
    form.appendChild(submit);

    //set attributes to show on the scoreboard funtion
    title.textContent = "All Done!"
    form.setAttribute("action", "submit");
    formLabel.textContent = "Enter your initials: ";
    initials.setAttribute("type", "text");
    // initials.setAttribute("name", "Enter your Initials: ");
    initials.setAttribute("placeholder", "Your Initials");
    submit.textContent = "Submit";
    
    description.textContent = "Your final score is " + finalScore + ".";
       

    var highScore = {
      student: initials.value,
      grade: finalScore.value,
    }

    localStorage.setItem("highScore",JSON.stringify(highScore));

    submit.addEventListener("click", function(){
      var endGame = document.createElement("h1");
      questionsContainer.appendChild(endGame);
      endGame.textContent = "End Game"
  
    })

  }

  


  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      question.textContent = "";
      but1.hidden = true;
      but2.hidden = true;
      but3.hidden = true;
      but4.hidden = true;
      li1.hidden = true;
      li2.hidden = true;
      li3.hidden = true;
      li4.hidden = true;
      timerResult.textContent = "";
      scoreboard();
    }
    
  }, 1000);
    
  

})
