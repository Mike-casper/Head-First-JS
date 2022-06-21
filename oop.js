let fiat ={
  make:"Fiat",
  model:"500",
  year:1960,
  color:"Medium Blue",
  passengers:3,
  mileage:80000,
  started: false,
  fuel:0,

  start:function(){
    this.started = true;
    if(this.fuel == 0){
      alert("Your car is empty, fill up before starting!");
    } else{
      this.started = true;
    }
  },
  stop:function(){
    this.started = false;
  },

  drive: function(){
    if (this.started){
      if(this.fuel>0){
        alert(this.make + " " + this.model + " goes zoom zoom");
        this.fuel = this.fuel - 1;
      }else{
        alert("Oh no, out of fuel");
        this.stop();
      }
      alert("Zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel:function(amount){
    this.fuel = this.fuel + amount;
  }
};

fiat.needsWashing = true;


let cadi ={
  make: "GM",
  model:"Cadillac",
  year: 1955,
  color:"tan",
  passengers: 5,
  convertible: false,
  mileage:12989,
  started: false,

  start:function(){
    this.started = true;
  },
  stop:function(){
    this.started = false;
  },
  drive:function(){
    if(this.started){
      alert(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
};

let chevy ={
  make: "Chevy",
  model:"Bel Air",
  year: 1957,
  color:"red",
  passengers: 2,
  convertible: false,
  mileage:1021,
  started: false,

  start:function(){
    this.started = true;
  },
  stop:function(){
    this.started = false;
  },
  drive:function(){
    if(this.started){
      alert(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  }
};



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