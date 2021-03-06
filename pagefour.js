 let scores = [60, 50, 60, 58, 54, 54, 80, 50, 52, 57, 67, 69, 40, //pg 4
            50, 54, 56, 32, 23, 76, 43, 66, 45, 76, 4, 43, 65, 57, 80];

let costs = [.25, .27, .34, .30, .23, .29, .34, .36,.25, .27, .34, .30, .23, .29, .34, .36,
  .25, .27, .34, .30, .23, .29, .34, .36,.25, .27, .34, .30, .23, .29, .34, .36,];

function printAndHighScore(scores){
let output;
let highScore = 0;


for(let x=0; x<scores.length; x++){
  output = "Bubble solution #" + x + " score: " + scores[x];
  console.log(output);
  if(scores[x]>highScore){
    highScore = scores[x];
  }
}
return highScore;
}

function getBestResult(scores, highScore){
  let bestSolutions = [];
  for (let x = 0; x<scores.length; x++){
    if (scores[x] == highScore){
      bestSolutions.push(x);
    }
  }
  return (bestSolutions);
}
let highScore = printAndHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: "+ highScore);

let bestSolutions = getBestResult(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

function getMostCostEffectiveSolution(scores, costs, highScore){
  let cost = 100;
  let index;
  for (let i=0; i<scores.length; i++ ){
    if (scores[i] == highScore){
      if (cost>costs[i]){
        index = i;
        cost = costs[i];
      }
    }
  }
  return index;
}

let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution # " + mostCostEffective + " is the most effective");





//use for

let product = ["Choo Cho Chocolate", "Icy Mint", "Cake Better"];
let hasBubbleGum = [true, false, true];
for(let y=0; y<hasBubbleGum.length; y++){
  if(hasBubbleGum[y]){
    output = product[y] + " contains bubble gum";
  }
  console.log(output);
}


//use while
let y = 0;
while (y<hasBubbleGum.length){
if (hasBubbleGum[y]){
  console.log(product[y] + " contains bubble gum");
}
y=y+1;
}

