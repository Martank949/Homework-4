document.getElementById("button1").onclick = function() {
        document.getElementById("clickBelow").innerHTML = "you clicked the button!";
        document.getElementById("button1").style.display = "none";
    }
    //this is a button that should start or cancel the start timer or test
document.getElementById("startButton").onclick = function() {
        var txt;
        var button = confirm("You have 2 minutes to complete this test, press 'OK' to start");
        //if user clicks "ok"
        if (button == true) {
            var timeLeft = 30;
            var timer = setInterval(function() {
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
    //count down timer 


//document.getElementById("demo").innerHTML = "seconds";
//alert("Hello World")