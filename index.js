let randomNumber1 =Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+ 1;

let randomDiceImage = "dice" + randomNumber1+ ".png" //dice 1-6 .png;

let randomImagesSource = "/images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImagesSource);

// random number 2 generator
 
let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) +1 ;

let randomImageSource2 = "/images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
//player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!😎";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!😎";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}