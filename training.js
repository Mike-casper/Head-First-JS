let test1 = "abdced";
let test2 = "123";
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = {"abdced":123};
let test8 = ["abdced",123];
let test9 = null;


console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);


//


if(99=="99"){
  console.log("A number equals a string!");
} else{
  console.log("No way a number equals a string");
}

let example1 = Infinity - "1";
console.log(example1);

let example2 = 2 + "1 1";
console.log(example2);

let example3 = 99+101;
console.log(example3);

let example4 = "1" - "1";
console.log(example4);

console.log("Result: " + 10/2);

let example5 = 3 + " bananas " + 2 + " apples";
console.log(example5);


//

function lieDetectorTest(){
  let lies = 0;


let stolenDiamond={ };
if(stolenDiamond){
  console.log("You stole the diamond");
  lies++
}

let car ={
  keysInPocket: null
};

if (car.keysInPocket){
  console.log("Uh oh, guess you stole the car");
  lies++;
}

if (car.emptyGasTank){
  console.log("You drove the car after you stole it!");
  lies++;
}

let foundYourAtTheCrimeScene = [];
if (foundYourAtTheCrimeScene){
  console.log("A sure sign of guilt");
  lies++;
}

if (foundYourAtTheCrimeScene[0]){
  console.log("Caugtt with a stolen item!");
  lies++;
}

let yourName = " ";
if(yourName){
  console.log("Guess you lied about your name");
  lies++;
}
return lies;
} 

let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3){
  console.log("guity as charhed");
}


//

let input = "abcdef";
for (var i=0; i<input.length;i++){
  if (input.charAt(i) === "e"){
    console.log("Thre's an e sign at index " + i);
  }
}



//


function validate(phoneNumber){
  if (phoneNumber.length > 8 ||
    phoneNumber.length<7){
    return false;
  }
  let first = phoneNumber.substring(0 , 3);
  let second = phoneNumber.substring(phone.Number.length - 4);

  if(isNaN(first) || isNaN(second)){
    return false;
  }
  if (phoneNumber.length === 8){
    return(phoneNumber.charAt(3) === "-");
  }
  return true;
}


//


function Duck(sound){
  this.sound = sound;
  this.quack = function(){console.log(this.sound);}
}
  let toy = new Duck("quack quack");

  toy.quack();

  console.log(typeof toy);
  console.log(toy instanceof Duck)

