var randomNUmber1 = Math.floor(Math.random() * 6) + 1;

var randomNUmber2 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNUmber1 + "\n" + randomNUmber2);

var randomImagePath = "./images/dice" + randomNUmber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImagePath);


randomImagePath = "./images/dice" + randomNUmber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagePath);

// randomNUmber1 = randomNUmber2;

if(randomNUmber1 === randomNUmber2){
    document.querySelector("h1").innerText = "🚩DRAW 🚩";
} else if(randomNUmber1 > randomNUmber2){
    document.querySelector("h1").innerText = "🚩Player-1 Wine";
} else{
    document.querySelector("h1").innerText = "Player-2 Wine🚩";
}