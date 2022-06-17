let fiat ={
  make:"Fiat",
  model:"500",
  year:1960,
  color:"Medium Blue",
  passengers:3,
  mileage:80000
};

fiat.needsWashing = true;


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