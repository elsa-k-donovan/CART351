window.onload = function() {

     let canvas = document.getElementById("testCanvas");
     let context = canvas.getContext("2d");
     let shapeList = [];

     canvas.addEventListener('mousedown', (event)=>
     {
       console.log("mouse in canvas");
       for(let i=0; i < shapeList.length; i++){

         shapeList[i].collisionTest(event);
         
       }
     });

     console.log(canvas);

    // let cBox = new CustomShape(canvas.width/2, canvas.height/2, 50, 50,255, 0, 0, 1.0, context, canvas);
    // console.log(cBox);

     let shapeList = [];

     const NUM_SHAPES = 5;

     for(let i=0; i < NUM_SHAPES; i++){
       let r = (Math.floor((Math.random()*255)+1));
       let g = (Math.floor((Math.random()*255)+1));
       let b = (Math.floor((Math.random()*255)+1));
       shapeList.push(new CustomShape((i*55), canvas.height/2, 50, 50, r, g, b, 1.0, context, canvas, (i%5)+1, (i%7)+1));
     }

requestAnimationFrame(run);

function run(){
  context.clearRect(0, 0, canvas.width, canvas.height);

  for(let i = 0; i<shapeList.length; i++){
    shapeList[i].display();
  //  shapeList[i].update();
  }

  requestAnimationFrame(run);   //recursion: calling the function again indefinitely

}


}
