

let cadiParams = {make:"GM",
model: "Cadillac",
year: 1955,
color: "white",
passengrs: 5,
convertible: false,
mileage: 12892,}

let cadi = new Car(cadiParams);


function Car(params){
  this.make = params.make;
  this.model = params.model; 
  this.year = params.year; 
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.milleage = params.milleage;
  this.started = false;

  this.start = function(){
    this.started = true;
  };
  this.stop = function(){
    this.started = false;
  };
  this.drive = function(){
    if(this.started){
      alert("Zoom, zoom!");
    } else {
      alert("You need to start the engine first");
    }
  };
}

cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();


let emptyArray = new Array();
emptyArray[0] = 99;

let oddNumbers = new Array(3);
oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;
oddNumbers.reverse(); // 5,3,1
let aString = oddNumbers.join(" -"); // 5-3-1
