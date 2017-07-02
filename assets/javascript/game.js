var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var correctLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

//Start listening for onkeyup events
document.onkeyup = function(event) {
	var playerInput = event.key;
	lettersGuessed.push(playerInput);
	
	if (playerInput === correctLetter) {
		wins++;
		guessesLeft = 9;
		lettersGuessed = [];
		correctLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	} else {
		guessesLeft--;		
	}

	if (guessesLeft === 0) {
		losses++;
		guessesLeft = 9;
		lettersGuessed = [];
		correctLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	var html = "<h1>The Psychic Game</h1>" + "<h4>Guess what letter I'm thinking of</h4>" + "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses left: " + guessesLeft + "</h4>" + "<h4>Your guesses so far: " + lettersGuessed + "</h4>";

	document.querySelector("#results").innerHTML = html;
}