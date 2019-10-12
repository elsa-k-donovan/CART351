window.onload = function(){


  //add an audio context
  let audioContext = new (window.AudioContext || window.webkitAudioContext)();
  // define audio context
  // Webkit/blink browsers need prefix, Safari won't work without window.
  // step 1 access the canvas element && the graphics context....
  let canvas = document.getElementById('testCanvas');
  let context = canvas.getContext('2d');
  let colors = ["#8ED6FF","#c379e5","#e22626","#61f495","#4953c1","#ffb807","#ffc907"];
  let boxes = [];

for(let i=0; i<5;i++){
  boxes.push(new AudioBox(i*60+100,canvas.height/2,50,50,colors[i%colors.length],i,context,audioContext));
}

for(let i =0; i<boxes.length; i++){
  boxes[i].renderBox();
}

canvas.addEventListener('mousedown',(event)=>{

  for(let i =0; i<boxes.length; i++){
    boxes[i].hitTest(event);
  }

});


// recursive call ...
requestAnimationFrame(runAni);


function runAni(){
  //need to reset the background :)
  // clear the canvas ...
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i =0; i< boxes.length;i++){
    //myEllipses[i].update();
  boxes[i].renderBox();

  }

  // recursive call ...
  requestAnimationFrame(runAni);
}
}
