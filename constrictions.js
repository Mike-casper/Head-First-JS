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