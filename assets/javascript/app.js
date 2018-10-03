var page1;
var content;
var counter = 20;
var questionArray = [
    "What is the capital of Australia?",
    "What is the capital of Liberia?",
    "What is the capital of Taiwan?",
    "What is the capital of Japan?",
    "What is the capital of China?"];
var answerArray = [
    ["Canberra", "Melbourne", "Sydney", "Darwin"],
    ["Arthington","Monrovia","Tuzon","Marshall"],
    ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
    ["Kyoto","Hiroshima","Tokyo","Osaka"],
    ["Hong Kong", "Macau", "Shanghai", "Beijing"]];

var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing"];
var questionNumber = 0;
var selected;
var theClock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$(document).ready(function() {   
    function startScreen() {
        page1 = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(page1);
    }
    startScreen();
    $("body").on("click", ".start-button", function(){
        fireQuiz();
    
        timer();
    
    });
    
    $("body").on("click", ".answer", function(){
    
        selected = $(this).text();
        if(selected === correctAnswers[questionNumber]) {

            clearInterval(Clock);
            winner();
        }
        else {

            clearInterval(Clock);
            loser();
        }
    });
    
    $("body").on("click", ".reset-button", function(){
        resetGame();
    });
    
    });
    
    function tomeoutLoss() {
        unanswered++;
        content = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionNumber] + "</p>";
        $(".mainArea").html(content);
        setTimeout(wait, 100);
    }
    
    function winner() {
        correct++;
        content = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionNumber] + "</p>";
        $(".mainArea").html(content);
        setTimeout(wait, 100);
    }
    
    function loser() {
        incorrect++;
        content = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionNumber] + "</p>";
        $(".mainArea").html(content);
        setTimeout(wait, 100);
    }
    
    function fireQuiz() {
        content = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questionArray[questionNumber] + "</p><p class='first-answer answer'>A. " + answerArray[questionNumber][0] + "</p><p class='answer'>B. "+answerArray[questionNumber][1]+"</p><p class='answer'>C. "+answerArray[questionNumber][2]+"</p><p class='answer'>D. "+answerArray[questionNumber][3]+"</p>";
        $(".mainArea").html(content);
    }
    
    function wait() {
        if (questionNumber <4) {
        questionNumber++;
        fireQuiz();
        counter = 20;
        timer();
        }
        else {
            finalPage();
        }
    }
    
    function timer() {
        Clock = setInterval(tenSeconds, 1000);
        function tenSeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                tomeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalPage() {
        content = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(content);
    }
    
    function resetGame() {
        questionNumber = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        counter = 20;
        fireQuiz();
        timer();
    }
    
