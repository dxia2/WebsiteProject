// Chairs Quiz

// Custom "Question" data type with the question's input field, feedback paragraph, and array of correct answers
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

// Make questions
let question1 = new Question(document.getElementById("question1Input"), document.getElementById("question1Feedback"), ["office chair", "officechair"]);
let question2 = new Question(document.getElementById("question2Input"), document.getElementById("question2Feedback"), ["armchair", "arm chair"]);
let question3 = new Question(document.getElementById("question3Input"), document.getElementById("question3Feedback"), ["bench"]);
let question4 = new Question(document.getElementById("question4Input"), document.getElementById("question4Feedback"), ["yes", "yeah", "sure"]);
let question5 = new Question(document.getElementById("question5Input"), document.getElementById("question5Feedback"), ["yes", "yeah", "sure"]);

let quizScoreEl = document.getElementById("quizScore");
let responseToQuizScoreEl = document.getElementById("responseToQuizScore");
let score = 0;
let maxScore = 5;

// Event Listener
checkAnswersButton.addEventListener("click", checkTestAnswers);

// Event function
function checkTestAnswers(){
    score = 0;

    // Check every question to see if the answer is correct
    AnswerCorrectOrIncorrect(question1);
    AnswerCorrectOrIncorrect(question2);
    AnswerCorrectOrIncorrect(question3);
    AnswerCorrectOrIncorrect(question4);
    AnswerCorrectOrIncorrect(question5);

    // Display quiz results
    quizScoreEl.innerHTML = "You got " + score + "/" + maxScore + " (" + (score/maxScore) * 100 + "%) ";
    
    // Give celebration or encouragement based on quiz score
    if(score > 3){
        responseToQuizScoreEl.innerHTML = "Good job! You are an expert on chairs.";
    }else{
        responseToQuizScoreEl.innerHTML = "Nice try! See if you can get a better mark next time."
    }

}

// Function that tells the user if their answer is correct by changing the "feedback" text
function AnswerCorrectOrIncorrect(question){
    isCorrect = false;
    // Loop through all the questions' correct answers
    for(let i = 0; i < question.correctAnswers.length; i++){
        // If user's answer is equal to one of the question's correct answers, set isCorrect to true
        if(question.input.value.toLowerCase() === question.correctAnswers[i]){
            isCorrect = true;
            break;
        }
    }

    if(isCorrect){
        // If is correct set "feedback" paragraph to say Correct
        question.feedback.innerHTML = " Correct";
        question.feedback.style.color = "green";
        question.input.style.borderColor = "green";
        // Increment score by 1
        score++;
    }else{
        // If is not correct set "feedback" paragraph to say Incorrect
        question.feedback.innerHTML = " Incorrect";
        question.feedback.style.color = "red";
        question.input.style.borderColor = "red";
    }
}   
