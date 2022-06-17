let scores = [60,50,60,58,54,54,58,50,52,54];

let solution2 = scores[2];
alert("Solution 2 produced " + solution2 + " bubbles.")




let flavors = ["vanilla","butterscotch","lavender","chocolate","cookie dough"];

let flavorsOfDay = flavors[2];
flavors[3] = "vanilla chip";


function makePhrases (){
  let words1 = ["24/7", "multi-tier","30,000 foot", "B-to-B", "win-win"];
  let words2 = ["empowered", "value-added", "oriented","focused","aligned"];
  let words3 = ["process","solution","tipping-point","strategy","vision"];

  let rand1 = Math.floor(Math.random()*words1.length);
  let rand2 = Math.floor(Math.random()*words2.length);
  let rand3 = Math.floor(Math.random()*words3.length);

  let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase);
}
makePhrases();