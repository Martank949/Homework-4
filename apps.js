       var locationInTest = 0;
       var correct = 0;
       var choice, choices, choiceA, choiceB, choiceC, test, testLocator, question, quiz;

       document.getElementById("startButton").onclick = function strBtn() {
           var txt;
           var button = confirm("You have 2 minutes to complete this test, press 'OK' to start");
           //if user clicks "ok"
           if (button == true) {
               var timeLeft = 30;
               var timer = setInterval(function strTmr() {
                   if (timeLeft <= 0) {
                       clearInterval(timer);
                       //timer is up
                       document.getElementById("demo").innerHTML = "Put your keyboard fingers up!";
                   } else {
                       document.getElementById("demo").innerHTML = timeLeft + " Seconds Remaining";
                       //progress bar
                       document.getElementById("progressBar").value = 30 - timeLeft;
                   }
                   timeLeft -= 1;
               }, 1000);

           } else {
               alert("Its ok if you are not ready, hit the books and come back when you are ready!");
           }
       }

       var questions = [{
           question: "Select the correct statement:",
           a: "JavaScript is a server-side only language",
           b: "JavaScript is used only for web apps",
           c: "You can use JavaScript to create interactive web elements",
           answer: "C"
       }, {
           question: "Where is the 'script' tag typically placed?",
           a: "Before the HTML tag",
           b: "Inside the HEAD tag",
           c: "After the closing tag",
           answer: "B"
       }, {
           question: "Where else is the 'script' tag typically placed?",
           a: "Inside the format element",
           b: "Inside the table element",
           c: "Inside the BODY tag",
           answer: "C"
       }, {
           question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
           a: "script src='xxx.js'",
           b: "script name='xxx.js'",
           c: "script href='xxx.js'",
           answer: "A"
       }, {
           question: "How do you create a function in JavaScript",
           a: "function = myFunction()",
           b: "function myFunction()",
           c: "function:myFunction()",
           answer: "B"
       }, {
           question: "How do you write 'Hello World' in an alert box",
           a: "alert('Hello World!')",
           b: "msg('Hello World')",
           c: "msgBox('Hello World')",
           answer: "A"
       }, {
           question: "Which of the following are capabilities of functions in JavaScript?",
           a: "Return a value",
           b: "Accept parameters and Return a value",
           c: "Accept parameters",
           answer: "C"
       }, {
           question: "Which of the following can't be done with client-side JavaScript?",
           a: "Validating form",
           b: "Sending a form's contents by email",
           c: "Storing the form's contents to a database file on the server",
           answer: "C"
       }, {
           question: "What are variables used for in JavaScript Programs?",
           a: "Storing numbers, dates, or other variables",
           b: "Varying randomly",
           c: "Causing high-school algebra flashbacks",
           answer: "A"
       }, {
           question: "Why so JavaScript and Java have similar names?",
           a: "JavaScript is a stripped-down version of Java",
           b: "JavaScript's syntax is loosely based on Java's",
           c: "None of the above",
           answer: "B"
       }];

       function get(x) {
           return document.getElementById(x);
       }

       function renderQuestion() {
           test = get("test");
           if (locationInTest >= questions.length) {
               test.innerHTML = "<h2>You got " + correct + " out of " + questions.length + " questions correct</h2>";
               get("testLocator").innerHTML = "Test completed";
               locationInTest = 0;
               correct = 0;
               return false;
           }
           get("testLocator").innerHTML = "Question " + (locationInTest + 1) + " of " + questions.length;

           question = questions[locationInTest].question;
           choiceA = questions[locationInTest].a;
           choiceB = questions[locationInTest].b;
           choiceC = questions[locationInTest].c;
           test.innerHTML = "<h3>" + question + "</h3>";
           test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + choiceA + "</label><br>";
           test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + choiceB + "</label><br>";
           test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + choiceC + "</label><br><br>";
           test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
       }

       function checkAnswer() {
           choices = document.getElementsByName("choices");
           for (var i = 0; i < choices.length; i++) {
               if (choices[i].checked) {
                   choice = choices[i].value;
               }
           }
           if (choice == questions[locationInTest].answer) {
               correct++;
           }
           locationInTest++;
           renderQuestion();
       }
       window.addEventListener("load", renderQuestion);