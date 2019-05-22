var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDiceImage = "img" + randomNumber1 + ".png";  //img1- img6 . png
var randomImageSource = "img/" + randomDiceImage;   // img/img1- img/img6
var image1 = document.querySelectorAll("img")[0];   //image1 from html page
image1.setAttribute("src", randomImageSource);   //change attribute src to randomImageSource

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "img" + randomNumber2 + ".png";
var randomImageSource2 = "img/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player1 wins😊";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "🚩Player2 wins😊";
} else {
    document.querySelector("h1").textContent = "Match Drawn!😇";
}