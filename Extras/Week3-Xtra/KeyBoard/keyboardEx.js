window.onload = function(){

  // step 1 access the canvas element && the graphics context....
  let canvas = document.getElementById('testCanvas');
  let context = canvas.getContext('2d');
  let letterList = [];
  // lets add a key ...
  window.addEventListener("keypress",(event)=>{
   console.log(event.keyCode);
    //ASCII
   if(event.keyCode ===32 )
   letter ="SPACE";
   else
    letter = event.key;
    //using math library for random placement
    let randomValX = Math.floor((Math.random() * 400) + 1);
    letterList.push(new myLetter(letter,randomValX,-10,context,canvas));
  });

  requestAnimationFrame(runAni);

  function runAni(){
    //need to reset the background :)
    // clear the canvas ...
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log(letterList.length);

    for (let i =0; i< letterList.length;i++){
    letterList[i].renderLetter();
    //update yPos of letter +++ check if it is at bottom of screen
    let shouldUpdateLetter = letterList[i].updateLetter();

      if (shouldUpdateLetter ===false) {
                //remove from the array
                letterList.splice(i, 1);
           }
        }
        // recursive call ...
      requestAnimationFrame(runAni);


      } //end runANi




//end on windowload
}
