let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = randomLoc+1;
let location3 = randomLoc+1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false){
  guess = prompt("Ready, aim, fire! (enter a number 0-6):");
if (guess < 0 || guess > 6){
  alert("Please enter a valid cell number");
} else {
  guesses = guesses + 1;



if (guess == location1 || guess == location2 || guess == location3 ) {
alert("Hit!");
hits = hits + 1;
if (hits==3){
  isSunk = true;
  alert("You sank my battleship!");
}
} else {
  alert("Miss!");

}
}
}
let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accurancy was " + (3/guesses);
alert(stats); 