

let passenger = [
  {name:"Jane Dolool", paid:true},
  {name:"Dr.Evel", paid:true},
  {name:"Sue Property", paid:false},
  {name:"John Funcall", paid:true},
];

/*
function checkPaid(passenger){
  for (let i=0; i<passenger.length; i++){
    if(!passenger[i].paid){
      return false;
    }
  }
  return true;
}
function checkNoFly(passenger){
  for (let i=0; i<passenger.length; i++){
    if(onNoFlyList(passenger[i].name)) {
      return false;
    }
  }
  return true;
}
function printPassenger(passenger){
  for (let i=0; i<passenger.length; i++){
    console.log(passenger[i].name);
    return false
  }
  return true;
}
*/

function processPassengers(passenger, testFucntion){
  for (let i =0; i<passenger.length; i++){
    if(testFucntion(passenger[i])){
      return false;
    }
  }
  return true;
}
function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger){
  return (!passenger.paid);
}

let allCanFly = processPassengers(passenger, checkNoFlyList);
if(!allCanFly){
  console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passenger, checkNotPaid);
if(!allPaid){
  console.log("The plane can't take off: not everyone has paid.");
}

