let fiat ={
  make:"Fiat",
  model:"500",
  year:1960,
  color:"Medium Blue",
  passengers:3,
  mileage:80000,
  started: false,

  start:function(){
    this.started = true;
  },
  stop:function(){
    this.started = false;
  },

  drive: function(){
    if (this.started){
      alert("Zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
};

fiat.needsWashing = true;


let cadi ={
  make: "GM",
  
}


/*let miles = fiat.mileage;
if (miles<70350){
  byuIt();
}*/


/*if(fiat.year<1950){
  classic = true;
}
for (let i = 0; i<fiat.passengers; i++){
  addPersonToCar();
}*/


function prequal(car){
  if(car.mileage>10000){
    return false;
  } else if(car.year>1960){
    return false;
}
return true;
}

let worthALook = prequal(fiat);
if (worthALook){
  console.log("You gotta check out this " + fiat.make + " " + fiat.model);
} else {
  console.log("You should really pass on the " + fiat.make + " " + fiat.model);
}