

var player1Score = 0;
var player2Score = 0;
var randomNUmber1;
var randomNUmber2;

function refresh_me() {
    

    randomNUmber1 = Math.floor(Math.random() * 6) + 1;
    randomNUmber2 = Math.floor(Math.random() * 6) + 1;

    // console.log(randomNUmber1 + "\n" + randomNUmber2);

    var randomImagePath = "./images/dice" + randomNUmber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImagePath);


    randomImagePath = "./images/dice" + randomNUmber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImagePath);

    // randomNUmber1 = randomNUmber2;

    if (randomNUmber1 === randomNUmber2) {
        document.querySelector("h1").innerText = "🚩DRAW 🚩";
    } else if (randomNUmber1 > randomNUmber2) {
        document.querySelector("h1").innerText = "🚩Player-1 Wine";
        player1Score++;
    } else {
        document.querySelector("h1").innerText = "Player-2 Wine🚩";
        player2Score++;
    }

    

    document.getElementById("score1").innerText = "Player 1: " + player1Score;
    document.getElementById("score2").innerText = "Player 2: " + player2Score;

}

