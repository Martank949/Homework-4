        //this is a button that should start or cancel the start timer or test
        document.getElementById("startButton").onclick = function() {
            //document.getElementById("startButton").style.display = "none";
            var txt;
            //Pop up that allows user to choose ok or cancel
            var button = confirm("You have 2 minutes to complete this test, press 'OK' to start");
            //if user clicks "ok"
            if (button == true) {
                var timeLeft = 10;
                document.getElementById("startButton").style.display = "none";
                var timer = setInterval(function() {
                    if (timeLeft == 0) {
                        clearInterval(timer);

                        //timer is up
                        document.getElementById("demo").innerHTML = "Put your keyboard fingers up!";
                        alert("Time is Up!");
                    } else {
                        document.getElementById("demo").innerHTML = timeLeft + " Seconds Remaining";
                        //progress bar
                        document.getElementById("progressBar").value = 10 - timeLeft;
                    }
                    timeLeft -= 1;
                }, 1000);

            } else {
                alert("Its ok if you are not ready, hit the books and come back when you are ready!");
            }
        }