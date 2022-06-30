

let passenger = [
  {name:"Jane Dolool", paid:true, ticket:"coach"},
  {name:"Dr.Evel", paid:true, ticket:"firstclass"},
  {name:"Sue Property", paid:false, ticket:"firstclass"},
  {name:"John Funcall", paid:true,ticket:"upEconom"},
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


function printPassenger(passenger){
  let message = passenger.name;
  if(passenger.paid===true){
    message = message + " has paid.";
  } else {
    message = message + "has not paid."
  }
  console.log(message);
  return false;
}

processPassengers(passenger, printPassenger);





function createDrinkOrder(passenger){
  let orderFunction;
  if(passenger.ticket === "firstclass"){
    orderFunction = function(){
      alert("Would you like a cocktail or wine?");
  }; 
if(passenger.ticket === "upEconom"){
  orderFunction = function(){
    alert("Would you like wino or limonad?")
  }
}
}else{
  orderFunction = function(){ 
    alert("Your choice is cola or water.");
  };
}
return orderFunction;
}

function createDinnerOrder(passenger){
  let dinnerFunction;
  if(passenger.ticket === "firstclass"){
    dinnerFunction = function(){
      alert("Chicken or pasta?");
    };
  }
   else if(passenger.ticket === "upEconom"){
      dinnerFunction = function(){
        alert("Cheese or snack box?");
      };
  }else{
    dinnerFunction = function(){
      alert("nut or pretzels?")
    };
  }
  return dinnerFunction;
}


function serveCustomer(passenger){
 let getDrinkOrderFunction = createDrinkOrder(passenger);
 let getDinnerOrderFunction = createDinnerOrder(passenger);
 getDrinkOrderFunction();
 //lunch
 getDinnerOrderFunction();
 
 getDrinkOrderFunction();
}

function servePassenger(passenger){
  for(let i=0; i<passenger.length;i++){
    serveCustomer(passenger[i]);
  }
}
servePassenger(passenger);