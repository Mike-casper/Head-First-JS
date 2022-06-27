




window.onload = function init(){
 /* let image = document.getElementById("zero");
  image.onclick = showAnswer;*/
  let images = document.getElementsByTagName("img");
  for (let i=0; i<images.length; i++){
    //images[i].onclick = showAnswer;
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = reblur;
  }
};
function showAnswer(eventObj){
  let image = eventObj.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = name;
  //setTimeout(reblur, 2000, image);
}

function reblur(eventObj){
  let image = eventObj.target;
  let name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}



/*function timerHANDLER(){
  alert("Hey what are you doing just sitting there staring at a blank screen?");
}
setTimeout(timerHANDLER, 5000);*/