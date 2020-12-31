const readline = require("readline");
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber = randomInRange(0, 100);

function checkGuess(num) {
  if (num > secretNumber) {
    console.log("Too high");
    return false;
  }
  if (num < secretNumber) {
    console.log("Too low");
    return false;
  }
  console.log("You Win!");
  return true;
}

function randomInRange(min, max) {
  return Math.floor(Math.random(min) * max);
}

function askGuess() {
  interface.question("Enter a guess:", (answer) => {
    if (checkGuess(Number(answer))) {
      interface.close();
    } else {
      askGuess();
    }
  });
}

console.log(askGuess());
