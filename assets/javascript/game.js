var computerScore = Math.floor(Math.random() * 101) + 19;
$("#computerScore").html(computerScore);
console.log(computerScore);
var playerScore = 0;
var wins = 0;
var losses = 0;

// random number generated. 12 possible results. starting with the number 1
    var random1 = Math.floor(Math.random() * 12) + 1; 
    var random2 = Math.floor(Math.random() * 12) + 1;
    var random3 = Math.floor(Math.random() * 12) + 1;
    var random4 = Math.floor(Math.random() * 12) + 1;

    console.log(random1, random2, random3, random4);

    function reset(){
        computerScore = Math.floor(Math.random()*101+19);
        random1 = Math.floor(Math.random() * 12) + 1; 
        random2 = Math.floor(Math.random() * 12) + 1;
        random3 = Math.floor(Math.random() * 12) + 1;
        random4 = Math.floor(Math.random() * 12) + 1;
        playerScore = 0;
        $("#computerScore").text(computerScore);
        $("#playerScore").text(playerScore);
        
        } 

 

function youWin() {
    alert("Winner winner chicken dinner!");
    wins ++;
    $("#wins").text(wins);
    reset ();
}
    
function youLose() {
    alert("You went over, LOSER!!");
    losses ++;
    $("#losses").text(losses);
    reset ();
}

$("#button1").on("click", function()  {
    playerScore = playerScore + random1;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random1);
    if (playerScore === computerScore) {
        youWin ();
    } else if (playerScore > computerScore) {
        youLose ();
    }

});

$("#button2").on("click", function()  {
    playerScore = playerScore + random2;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random2);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }

});

$("#button3").on("click", function()  {
    playerScore = playerScore + random3;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random3);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }
});

$("#button4").on("click", function()  {
    playerScore = playerScore + random4;
    $("#playerScore").html(playerScore);
    console.log("playerScore " + random4);
    if (playerScore === computerScore) {
        youWin ();
    } else if  (playerScore > computerScore) {
        youLose ();
    }
});



