

// this version runs once, but will log the prompt and validateUserChoice always shows as false.

var validateUserChoice = false;
var userChoice = prompt("rock, paper, or scissors?");
while (validateUserChoice) {
	if (userChoice === "paper" || "rock" || "scissors") {
		validateUserChoice = true;
	} else {
		userChoice = prompt("nope, try again. rock, paper, or scissors?");
	};
}
console.log(userChoice);
console.log(validateUserChoice);

//another version I wrote uses a do/while loop, but it only runs once before returning false:

do {
	var userChoice = prompt("rock, paper, or scissors?");
	if (userChoice === "paper" || "rock" || "scissors") {
		validateUserChoice = false;
	} else {
		validateUserChoice = true;
	};
} while(validateUserChoice);
