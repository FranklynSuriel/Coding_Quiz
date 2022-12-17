var body = document.body;
var questionsContainer = document.createElement("div");
var question = document.createElement("h1");
var title = document.createElement("h1");
var description = document.createElement("p");
var startQuiz = document.createElement("button")
var timeEl = document.getElementById("time")


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

title.textContent = "Coding Quiz Challenge";
description.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!."

body.appendChild(title);
body.appendChild(description);
body.appendChild(startQuiz);



startQuiz.textContent = "Start Quiz";

var secondsLeft = 60;

startQuiz.addEventListener("click", function(){
    console.log("I have been clicked");

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


    question.textContent = "A very usefull tool used during development and debugging for printing content to the degugger is:"
    but1.textContent = "JavaScript";
    but2.textContent = "terminal/bash";
    but3.textContent = "for loops";
    but4.textContent = "console.log";

    but4.addEventListener("click", function() {
        console.log("good answer");
        
    })
    
    

    
 
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
        //   sendMessage();
        }
    
    }, 1000);
    
   

})
