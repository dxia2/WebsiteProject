// Chairs Quiz
let checkAnswersButton = document.getElementById("checkAnswersButton");


setInterval(randomColorButton, 3000);
function randomColorButton(){
    checkAnswersButton.style.backgroundColor = rgba(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 1);
}