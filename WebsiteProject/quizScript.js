// Chairs Quiz
class Question{
    input = null;
    feedback = null;
    correctAnswers = null;
    constructor(input, feedback, correctAnswers){
        this.input = input;
        this.feedback = feedback;
        this.correctAnswers = correctAnswers;
    }
}


// Set Varibles
let checkAnswersButton = document.getElementById("checkAnswersButton");

let question1 = new Question(document.getElementById("question1Input"), document.getElementById("question1Feedback"), ["office chair", "officechair"]);
let question2 = new Question(document.getElementById("question2Input"), document.getElementById("question2Feedback"), ["armchair", "arm chair"]);
let question3 = new Question(document.getElementById("question3Input"), document.getElementById("question3Feedback"), ["bench"]);
let question4 = new Question(document.getElementById("question4Input"), document.getElementById("question4Feedback"), ["yes", "yeah", "sure"]);
let question5 = new Question(document.getElementById("question5Input"), document.getElementById("question5Feedback"), ["yes", "yeah", "sure"]);

let quizScoreEl = document.getElementById("quizScore");
let score = 0;
let maxScore = 5;
//Event Listener
checkAnswersButton.addEventListener("click", checkTestAnswers);

function checkTestAnswers(){
    AnswerCorrectOrIncorrect(question1);
    AnswerCorrectOrIncorrect(question2);
    AnswerCorrectOrIncorrect(question3);
    AnswerCorrectOrIncorrect(question4);
    AnswerCorrectOrIncorrect(question5);

    quizScoreEl.innerHTML = "You got " + score + "/" + maxScore + " (" + (score/maxScore) * 100 + "%) ";
}

// Function that tells the user if their answer is correct by changing the "feedback" text
function AnswerCorrectOrIncorrect(question){
    isCorrect = false;
    for(let i = 0; i < question.correctAnswers.length; i++){
        if(question.input.value.toLowerCase() === question.correctAnswers[i]){
            isCorrect = true;
            break;
        }
    }

    if(isCorrect){
        question.feedback.innerHTML = " Correct";
        question.feedback.style.color = "green";
        question.input.style.borderColor = "green";
        score++;
    }else{
        question.feedback.innerHTML = " Incorrect";
        question.feedback.style.color = "red";
        question.input.style.borderColor = "red";
    }
}   
