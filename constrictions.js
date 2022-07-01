/*
let dog ={
  name:"Fido",
  breed:"Mixed",
  weight:40
};
*/

function Dog(name, breed, weight){
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function(){
    if(this.weight>25){
      alert(this.name + " says Woof!");
    } else{
      alert(this.name + " says Yip!");
    }
  };
}

let fido = new Dog("Fido", "Mixed", 40);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Jack", 5);
let dogs = [fido, fluffy, spot];

for(let i=0; i<dogs.length;i++){
  let size = "small";
  if(dogs[i].weight>10){
    size = "large";
  }
  console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);
}

for(let i=0; i<dogs.length; i++){
  dogs[i].bark();
}



function Coffee(roast,ounces){
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function(){
    if(this.ounces === 8){
      return "small";
    } else if (this.ounces === 12){
      return "medium";
    } else if (this.ounces === 16){
      return "large";
    }
   };
   this.toString = function(){
    return "You've ordered a " + this.getSize() + " " + this.roast + " coffee"; 
   };
  }

  let houseBlend = new Coffee("House Blend", 12);
  console.log(houseBlend.toString());

  let darkRoast = new Coffee("Dark Roast", 16);
  console.log(darkRoast.toString());