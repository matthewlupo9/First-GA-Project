// var playerChoice = ["img/rock.jpg", "img/paper.jpg", "img/scissors.jpg"]

// var computerChoice = ["rock", "paper", "scissors"]

// var allWin = ["paperRock", "rockScissors", "scissorsPaper"]

// var allLose = ["rockPaper", "scissorsRock", "paperScissors"]

// var whoWins = 

// function randomChoice(pick) {
// 	if (var playerChoice(0) = var computerChoice(0)) {
// 		alert("draw");
// 	}

// 	if (var playerChoice(1)) {
// 		var computerChoice (0,1,2);
// 	}

// 	if (var playerChoice(2)) {
// 		var computerChoice (0,1,2);
// 	}
// }

function gameStart(index) {
	var choices = ["rock", "paper", "scissors"];
	var userChoice = choices[index];
	var computerChoices = randomChoice();
	var result = compareChoices(userChoice, computerChoices);
	$("#result").html(result);
}

function randomChoice() {
	var region = Math.random();
	if (region < 0.34) {
		return "rock";
	} else if (region < 0.67) {
		return "paper";
	} else {
		return "scissors";
	}
}

function compareChoices(a, b) {
	var allWin = ["paperrock", "rockscissors", "scissorspaper"];
	var result = "You Lose!";
	if (a === b) {
		result = "Draw!";
	} else {
		for (var index = 0; index < allWin.length; index++) {
			if (a + b === allWin[index]) {
				result =  "You Win!";
			}
		}
	}
	return result;
}