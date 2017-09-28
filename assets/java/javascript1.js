
var triviaArray = [

	question1 = {
		askQuestion: "What does the word dinosaur mean?",
		option1: "terrible breath",
		option2: "terrible lizard",
		option3: "terribly old",
		option4: "terrible person",
		correctAnswer: "terrible lizard",
		img: "assets/images/question1.jpg"
	},

	question2 = {
		askQuestion: "Jurrasic Park was written by?",
		option1: "Richard Attenborough",
		option2: "Steven Spielberg",
		option3: "Michael Chrichton",
		option4: "Judy Blume",
		correctAnswer: "Michael Chrichton",
		img: "assets/images/question2.jpg"
	},

	question3 = {
		askQuestion: "One of the heaviest dinosaurs, Brachiosaurus, weighed the same as?",
		option1: "17 African Elephants",
		option2: "10 Rhinos",
		option3: "12 Polar Bears",
		option4: "30 Humans",
		correctAnswer: "17 African Elephants",
		img: "assets/images/question3.jpg"
	},

	question4 = {
		askQuestion: "What equivalent height could a Brachiosaurus reach?",
		option1: "One Lamp Post",
		option2: "Two Story House",
		option3: "Four Stacked Double Decker Busses",
		option4: "5 Stacked Humans",
		correctAnswer: "Four Stacked Double Decker Busses",
		img: "assets/images/question4.jpg"
	},

	question5 = {
		askQuestion: "The Flintstones’ pet dinosaur was called?",
		option1: "Rex",
		option2: "Barney",
		option3: "Dino",
		option4: "Winney",
		correctAnswer: "Dino",
		img: "assets/images/question5.jpg"
	},

	question6 = {
		askQuestion: "An adult Stegosaurus had a brain the size of a... ?",
		option1: "Small Car",
		option2: "Basketball",
		option3: "Dog",
		option4: "Lime",
		correctAnswer: "Lime",
		img: "assets/images/question5.jpg"
	}]

var timerNumber = 30;
var intervalId;
var i = -1;


$( document ).ready(function() {

$("#game-start").hide();
$("#game-intermission").hide();
$("#game-over").hide();

//$("#game-play").hide();

function decrement() {
	timerNumber--;
	$("#time-remaining-area").html("Time remaining: " + timerNumber + " seconds");
}

function stop() {
      clearInterval(intervalId);
    }

function run() {
	for(var i=0; i<triviaArray.length; i++){
		timerNumber=30;
		if (timerNumber === 0) {
			answerReveal()
		intervalId = setInterval(decrement, 1000);
		}
		else{
			$("#game-intermission").hide()
			$("#game-play").show()
		    $("#question-area").text(triviaArray[i].askQuestion);
			$("#image-area").attr("src",triviaArray[i].img);
			$("#answer1").text(triviaArray[i].option1);
			$("#answer2").text(triviaArray[i].option2);
			$("#answer3").text(triviaArray[i].option3);
			$("#answer4").text(triviaArray[i].option4);
			$("#answer1").attr("data-answer",triviaArray[i].option1);
			$("#answer2").attr("data-answer",triviaArray[i].option2);
			$("#answer3").attr("data-answer",triviaArray[i].option3);
			$("#answer4").attr("data-answer",triviaArray[i].option4);
			$("#answer1").on("click", answerReveal)
			$("#answer2").on("click", answerReveal)
			$("#answer3").on("click", answerReveal)
			$("#answer4").on("click", answerReveal)
		}
	}
}

function answerReveal(){
	stop()
	if($(this).attr("data-answer") === triviaArray[i].correctAnswer){
		$("#game-play").hide()
		$("#game-intermission").show()
		$("#correct-wrong").text("You got it RIGHT!")
		$("#correct-answer").text(triviaArray[i].correctAnswer)
	}
	else{
		$("#game-play").hide()
		$("#game-intermission").show()
		$("#correct-wrong").text("You got it WRONG!")
		$("#correct-answer").text(triviaArray[i].correctAnswer)
	}
	setTimeout(run,5000)
}


run()

});


	



