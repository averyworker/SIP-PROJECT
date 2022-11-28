function blastofftimerV1(){
    console.log("blastofftimerV1() started");
    var countdownTimer = 5;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 1000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 2000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 3000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 4000)
    setTimeout(function(){
        countdownTimer = countdownTimer - 1;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 5000)
}


function playCraps()
// this is used to be a return value back to the program that its called, this can be used in this program
{
    console.log("playCraps() started");
// this is used for console log meaning it can print variables that were defined before and display the message
    var die1;
    var die2;
// Var is where we declare the variable so here we are declaring die1 and die 2
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);

// for here math.celi we are rounding up the numbers to the largest integer
// also the * 6 is where both dice can go anywhere from 1 to 6 
    console.log("Die 1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die 2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
// create sum from die1 and die2 by using the unction die 1 = + die 1 || die 2 = = die 2
    var sum = die1 + die2;
//  see if sum = 7 or 11
    if(sum == 7) {
        document.getElementById("crapsRes").innerHTML = "Craps, You Lose"; //if sum is 7 we lose 
    } else if (sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps, You Lose"; //if sum is 11 we lose
    } else {
        document.getElementById("crapsRes").innerHTML = "You Did Not Lose"; //if sum is not 7 or 11 we did not lose! Yay
    }

}


function blastofftimerV2(){
    //variables 
    var countdownTimer = 50;
    var halfCDT = countdownTimer / 2;
    var countdownDelay = 1000;
    var countdownChange = 1;
    var numPonints = 50;

    // loop used for assignmnet 
    for(var i = 0; i <= numPonints; i++){
        setTimeout (function(){
            console.log(countdownTimer);
            if(countdownTimer == 0){
                document.getElementById("countdownDisplay").innerHTML = "Blast Off!";
            } else if(countdownTimer < halfCDT){
                document.getElementById("countdownDisplay").innerHTML = 
                            "Warning Less than ½ way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
                countdownTimer = countdownTimer - countdownChange;
    },  countdownDelay * i)

}

}



function start(){
    console.log("start() funcsion started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    // This is the function to create the start and stop burron, 
    // This function is starting that if the start button is click than it grays out while the false button is still able to be used

}
function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

}