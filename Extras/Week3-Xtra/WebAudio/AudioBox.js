function AudioBox(x,y,w,h,c,initId,context,audioContext){
  this.audioContext = audioContext;
  this.context = context;
  this.xPos = x;
  this.yPos = y;
  this.boxWidth = w;
  this.boxHeight = h;
  this.boxColor = c;
  this.boxId = initId;
  this.currentBoxHeight =5;
  // have each instance have its own freq val (using the id)
  this.freqVal =  220+(initId*128);
  // each AudioBox has their own SOund Object ( a note)
  this.note = new Sound(this.audioContext); //make an instance...



  this.renderBox = function(){
    // NEED TO USE OUR "graphics context" for drawing::
    this.context.fillStyle = c; // change the color we are using
      this.context.fill(); // set the fill
      this.context.fillRect(this.xPos,this.yPos,this.boxWidth,this.boxHeight);

  }
  this.hitTest = function(event){
    if(event.clientX>this.xPos && event.clientX<this.xPos+this.boxWidth &&
    event.clientY>this.yPos && event.clientY<this.yPos+this.boxHeight){

      console.log(`${this.boxId} was clicked`);
      let now = this.audioContext.currentTime;
      //could change this ...
      this.note.offsetDuration =3;
      this.note.play(this.freqVal, now);
      //each one has their own
    }

  }
}
