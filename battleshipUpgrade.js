let view = {
  displayMessage: function(msg){
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
displayHit: function(location){
  let cell = document.getElementById(location);
  cell.setAttribute("class", "hit");
},
displayMiss: function(location){
  let cell = document.getElementById(location);
  cell.setAttribute("class", "miss");
}
};
/*
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
*/

let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
ships: [
  { locations: ["06", "16", "26"], hits: ["", "", ""] },
  { locations: ["24", "34", "44"], hits: ["", "", ""] },
  { locations: ["10", "11", "12"], hits: ["", "", ""] }
],


fire:function(guess){
  for(let i=0; i<this.numShips; i++){ //here was my mistake i=0;
    let ship = this.ships[i];
    let locations = ship.locations;
    let index = locations.indexOf(guess);//let index = ship.locations.indexOf(guess);
   
    if(index >= 0){
      ship.hits[index] = "hit";
      view.displayHit(guess);
      view.displayMessage("HIT");

      if(this.isSunk(ship)){
        view.displayMessage("You sank my battleship!");
        this.shipsSunk++;
      }
      return true;
    }
  }
  view.displayMiss(guess);
  view.displayMessage("You missed.");
  return false;
},

isSunk: function(ship){
  for (let i=0; i < this.shipLength; i++){
    if(ship.hits[i] !=="hit"){
      return false;
    }
  }
  return true;
}
};


model.fire("53"); // miss

model.fire("06"); // hit
model.fire("16"); // hit
model.fire("26"); // hit

model.fire("34"); // hit
model.fire("24"); // hit
model.fire("44"); // hit

model.fire("12"); // hit
model.fire("11"); // hit
model.fire("10"); // hit

function parseGuess(guess){
  let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if(guess === null || guess.length !==2){
    alert("Oops, please enter a letter and a number on the board");
  } else{
    firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar);
  }
}