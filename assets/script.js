// set global variables
var body = document.body;
var questionsContainer = document.createElement("div");
var question = document.createElement("h2");
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

//create buttons with the possible answers
var but1 = document.createElement("button");
var but2 = document.createElement("button");
var but3 = document.createElement("button");
var but4 = document.createElement("button");
var buttons = [but1, but2, but3, but4];

//fill content for title and description of Quiz
title.textContent = "Coding Quiz Challenge";
description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!."

//Append introductory elements
body.appendChild(title);
body.appendChild(description);
body.appendChild(startQuiz);


//Name os Start Quiz button
startQuiz.textContent = "Start Quiz";

//Set the value of the timers
var secondsLeft = 60;
var secondsShows = 2;

// Add an event listenter to the start button so we can start the timer and show the questions
startQuiz.addEventListener("click", function(){
  
  //Append the new elements on the screen 
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
  
  // Clear the following elements from the screen
  startQuiz.style.display = "none";
  title.textContent = "";
  description.textContent = "";
    
//Set the variable to use to get tract of score, current Question, selected answer and correct answer.
  var score = 0;
  var currentQuestion = 0;
  var selectedAnswer;
  var correctAnswer;

  // set the Quiz questions
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
  
  //create a funtion to fill the content with the questions, answers and correct answer
  function FillContent(newQuestion) {
    question.textContent = newQuestion['text'];
    but1.textContent = newQuestion['answer1'];
    but2.textContent = newQuestion['answer2'];
    but3.textContent = newQuestion['answer3'];
    but4.textContent = newQuestion['answer4'];
    correctAnswer = newQuestion['correctAnswer'];
    
  }
  //Call the fill question funtion with current question as an index, current question inicial value is 0
  FillContent(newQuestions[currentQuestion])
  // use .foreach to perform an event listener in each button  
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      selectedAnswer = button.textContent; // when the event listen for a click it will save the answer into selected answer
    
      if (selectedAnswer === correctAnswer) { // Compare if selected answer is equal to correct answer.
        score++;                              // If the selected answer is correct it will add one to the score
        currentQuestion++;                    //Also will add one to current question. Next time it will show the next question
        secondsShows = 2;                     //Set the time to show the result to 2 seconds
        answerResult("Correct Answer");       // Funtion to show a short message is the answer was good
        
    
    
      } else {
        currentQuestion++;                  // If the selected answer is incorrect it will add one to the current question as well
        secondsLeft -= 10;                  // it will be a 10 seconds penalization
        secondsShows = 2;                   //Set the time to show the result to 2 seconds
        answerResult("Wrong Answer");       // Funtion to show a short message is the answer was wrong
        
      }
    
      if (currentQuestion < newQuestions.length) {  //if current question is less than the lenght of new question
        FillContent(newQuestions[currentQuestion]); //Call the fillContent funtion again. Because current question was added one in the previous step, it will show the following question
    
      }else {                         //If current question is equal or more than the lenght of new question
        clearInterval(timerInterval); //Stop the timer
        //Clear or hide the following variables
        question.textContent = "";
        but1.hidden = true;
        but2.hidden = true;
        but3.hidden = true;
        but4.hidden = true;
        li1.hidden = true;
        li2.hidden = true;
        li3.hidden = true;
        li4.hidden = true;
        //call scoreboar funtion
        scoreboard();
        timerResult.textContent = "";
        
      }
    
      
    
    })
  });
  
  //funtion to show the result os each question 
  function answerResult(result) {
    var showAnswer = setInterval(function() {
      secondsShows--;
      timerResult.textContent = result;
      
      if (secondsShows === 0) {
        // Stops execution of action at set interval
        clearInterval(showAnswer);
        //clear answer result 
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
    initials.setAttribute("placeholder", "Your Initials");
    submit.textContent = "Submit";
      
    //Display message with the final score
    description.textContent = "Your final score is " + finalScore + ".";
       
    //set variable to save on the local store
    var highScore = {
      "student" : initials,
      "grade": finalScore,
    }
    localStorage.setItem("highScore",JSON.stringify(highScore));

    //event listener to show message End Game
    submit.addEventListener("click", function(){
    
      var endGame = document.createElement("h1");
      questionsContainer.appendChild(endGame);
      endGame.textContent = "End Game"  
    })

  }

  //Create a timer 
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    
    //if timer equal 0 and still questions to answer it will stop the quiz and clear the screen to show the scoreboar
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
