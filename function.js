/*function handler() { alert("Yeah, that page loaded!"); }
window.onload = handler;*/

window.onload = function() { alert("Yeah, that page loaded!"); };


/*function cookAlarm(){
  alert("Time to take the cookies out of the oven");
};

setTimeout(cookAlarm, 600000);
*/


/*setTimeout(function() {
  alert("Time to take the cookies out of the oven");
}, 600000);
*/




let migrating = true;
let fly = function(num){
  let sound = "Flying";
  function wingFlapper(){
    console.log(sound);
  }
  for(let i=0;i<num;i++){
    wingFlapper;
  }
};
function quack(num){
  let sound = "Quack";
  let quacker = function(){
    console.log(sound);
  };
  for (let i=0;i<num;i++){
    quacker();
  }
}
if(migrating){
  quack(4);
  fly(4);
}



let justAVar = "Oh, dont you worry about it, I'm GLOBAL";

function whereAreYou(){
  let justAVar = "Just an every day LOCAL";

  return justAVar;
}

let result = whereAreYou();
console.log(result);


let justVar = "Oh, don't worry about it, I'm GLOBAL";

function whereAreYou(){
  let justVar = "Just an every day LOCAL";
  function inner(){
    return justVar;
  }
  return inner;

}

let innerFunction = whereAreYou();
let resultt = innerFunction();
console.log(resultt);