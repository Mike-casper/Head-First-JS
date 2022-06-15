let word = "bottles";
let count = 99;
while(count>0){
    console.log(count + "" + word + "of beer in the wall");
    console.log(count + "" + word + "of beer");
    count = count - 1;
    if (count>0){
        console.log(count + "" + word + "of beer the wall");
    }else{
        console.log("No more" + word);
    }
}