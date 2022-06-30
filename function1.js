
let count = 0;

function counter(){
  count = count + 1;
  return count;
}

console.log(counter());
console.log(counter());


//

function makeCounter(){
  let count = 0;

  function counter(){
    count = count + 1;
    return count;
  }
  return counter;
}

let doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());



function makeTimer(doneMessage, n){
  setTimeout(function(){
    alert(doneMessage);
  },n);
  doneMessage = "OUCH!"
}

makeTimer("Cookies are done!", 1000);