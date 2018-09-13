// Declare variables for userTotal,wins,losses, the numbers for each crystal, randomNum the user will try to get//
var userTotal = 0;
var wins = 0;
var losses = 0;
var num1 = Math.floor(Math.random()*11+1);
var num2 = Math.floor(Math.random()*11+1);
var num3 = Math.floor(Math.random()*11+1);
var num4 = Math.floor(Math.random()*11+1);
var randomNum = Math.floor(Math.random()*101+19);

//create on ready function //
$( document ).ready(function() {
    
// generate numbers to the number, wins, losses id's //  
    $("#random-number").text(randomNum);
    $("#number-wins").text(wins);
    $("#number-losses").text(losses);

// create a function to reset the game each time //
    function reset() {
        randomNum = Math.floor(Math.random()*101+19);
        console.log(randomNum);
        $("#random-number").text(randomNum);
        var num1 = Math.floor(Math.random()*11+1);
        var num2 = Math.floor(Math.random()*11+1);
        var num3 = Math.floor(Math.random()*11+1);
        var num4 = Math.floor(Math.random()*11+1);
        userTotal = 0;
        $("#final-total").text(userTotal);
      

    }
// create counters for wins and losses //
    function winCounter() {
        alert("You won!");
        wins++;
        $("#number-wins").text(wins);
        reset();
    }

    function lossCounter() {
        alert("You lose!");
        losses++;
        $("#number-losses").text(losses);
        reset();
    }
// create click events for each jewel and conditionals that determine which counter is incremented //
    $("#blue").on("click", function(){
        userTotal = userTotal + num1;
        console.log("New userTotal = " + userTotal);
        $("#final-total").text(userTotal);
        if(userTotal === randomNum) {
            winCounter();
        } else if (userTotal > randomNum)
            lossCounter();

    });

    $("#green").on("click", function(){
        userTotal = userTotal + num2;
        console.log("New userTotal = " + userTotal);
        $("#final-total").text(userTotal);
        if(userTotal === randomNum) {
            winCounter();
        } else if (userTotal > randomNum)
            lossCounter();

    });

    $("#red").on("click", function(){
        userTotal = userTotal + num3;
        console.log("New userTotal = " + userTotal);
        $("#final-total").text(userTotal);
        if(userTotal === randomNum) {
            winCounter();
        } else if (userTotal > randomNum)
            lossCounter();

    });

    $("#yellow").on("click", function(){
        userTotal = userTotal + num4;
        console.log("New userTotal = " + userTotal);
        $("#final-total").text(userTotal);
        if(userTotal === randomNum) {
            winCounter();
        } else if (userTotal > randomNum)
            lossCounter();
        
    });

 
});