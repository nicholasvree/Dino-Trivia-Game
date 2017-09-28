
var triviaArray = [

	question1 = {
		askQuestion: "What does the word dinosaur mean?",
		options: ["terrible breath","terrible lizard","terribly old","terrible person"],
		correctAnswer: "terrible lizard",
		img: "assets/images/question1.jpg"
	},

	question2 = {
		askQuestion: "Jurrasic Park was written by?",
		options: ["Richard Attenborough", "Steven Spielberg", "Michael Chrichton", "Judy Blume"],
		correctAnswer: "Michael Chrichton",
		img: "assets/images/question2.jpg"
	},

	question3 = {
		askQuestion: "One of the heaviest dinosaurs, Brachiosaurus, weighed the same as?",
		options: ["17 African Elephants", "10 Rhinos", "12 Polar Bears", "30 Humans"],
		correctAnswer: "17 African Elephants",
		img: "assets/images/question3.jpg"
	},

	question4 = {
		askQuestion: "What equivalent height could a Brachiosaurus reach?",
		options: ["One Lamp Post", "Two Story House", "Four Stacked Double Decker Busses", "5 Stacked Humans"],
		correctAnswer: "Four Stacked Double Decker Busses",
		img: "assets/images/question4.jpg"
	},

	question5 = {
		askQuestion: "The Flintstones’ pet dinosaur was called?",
		options: ["Rex", "Barney", "Dino", "Winney"],
		correctAnswer: "Dino",
		img: "assets/images/question5.jpg"
	},

	question6 = {
		askQuestion: "An adult Stegosaurus had a brain the size of a... ?",
		options: ["Small Car", "Basketball", "Dog", "Lime"],
		correctAnswer: "Lime",
		img: "assets/images/question6.jpg"
	}]

var timerNumber = 30;
var intervalId = 0;
var i = -1;
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;



$( document ).ready(function() {



//$("#game-play").hide();

function decrement() {
	timerNumber--;
	$("#time-remaining-area").html("Time remaining: " + timerNumber + " seconds");
	if (timerNumber === 0) {
		 answerReveal()
	}
}

function stop() {
	//My program has an issue where it's not clearing the correct intervalId so it starts double\triple counting.  
	//Using brute force to clear all intervalId's 1-100.
	for(var k=-1; k<100; k++ )
      clearInterval(k);
    }

function run() {
	i++
	$("#game-start").hide();
	$("#floater").hide()
	if(i===triviaArray.length){
		console.log
		endGame()
	}
	else{
		timerNumber=30;
		intervalId = setInterval(decrement, 1000);
		$("#game-intermission").hide()
		$("#game-play").show()
	    $("#question-area").text(triviaArray[i].askQuestion);
		$("#image-area").attr("src",triviaArray[i].img);
		for(var j=0; j<triviaArray.length; j++){
			$("#answer"+j).text(triviaArray[i].options[j]);
			$("#answer"+j).attr("data-answer",triviaArray[i].options[j]);
		}
	}
}


function answerReveal(){
	stop()
	if($(this).attr("data-answer") === triviaArray[i].correctAnswer){
		$("#game-play").hide()
		$("#floater").show()
		$("#game-intermission").show()
		$("#correct-wrong").text("You got it RIGHT!")
		$("#correct-answer").text(triviaArray[i].correctAnswer)
		correctAnswerCount++;
	}
	else{
		$("#game-play").hide()
		$("#floater").show()
		$("#game-intermission").show()
		$("#correct-wrong").text("You got it WRONG!")
		$("#correct-answer").text(triviaArray[i].correctAnswer)
		incorrectAnswerCount++;
	}
	setTimeout(run,3000)
	console.log(correctAnswerCount)
	console.log(incorrectAnswerCount)
}


function startGame(){
	$("#game-start").show();
	$("#floater").show()
	$("#game-intermission").hide();
	$("#game-play").hide()
	$("#game-over").hide();
	$("#start-button").on("click", run)
}

function endGame(){
	$("#game-start").hide();
	$("#game-intermission").hide();
	$("#game-play").hide();
	$("#floater").show()
	$("#game-over").show();
	$("#correct-answer-area").text("Total Number Correct: " + correctAnswerCount)
	$("#incorrect-answer-area").text("Total Number Incorrect: " + incorrectAnswerCount)
	$("#restart-button").on("click", resetGame)

}

function resetGame(){
	stop()

	$("#game-start").show();
	$("#game-intermission").hide();
	$("#game-play").hide();
	$("#game-over").hide();

	correctAnswerCount=0;
	incorrectAnswerCount=0;
	i=-1;
}

startGame()

//placed these here (outside a function Run where they were originally because they were messing up the counts.)
$("#answer0").on("click",answerReveal)
$("#answer1").on("click",answerReveal)
$("#answer2").on("click",answerReveal)
$("#answer3").on("click",answerReveal)

});


	



