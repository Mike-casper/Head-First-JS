function bark(name,weight){
  if(weight>20){
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

bark("rover", 21);
bark("spot", 29);
bark("spike", 35);
bark("lady", 15);
bark("bruno", "21");
bark("fido", -1); 


function temperature(temp){
  if(temp<60){
    console.log("Wear a jacket");
  }
else if(temp<70){
  console.log("Wear a sweater");
} else{
  console.log("Wear a t-shift");
}
}
temperature(50);
temperature(80);
temperature(60);
