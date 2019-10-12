function myLetter(letter,x,y,context,canvas){
  this.canvas = canvas;
  this.context = context;
  this.fontString = "40px Arial";
  this.letterTyped = letter;
  this.xPos = x;
  this.yPos = y;

  this.renderLetter = function(){
  this.context.globalAlpha = 1.0;
  this.context.font = this.fontString;
  this.context.fillStyle = "#FF0000";
  this.context.fillText(this.letterTyped,this.xPos,this.yPos);
}

this.updateLetter =function(){
  this.yPos+=1;
  //chack if should be done
  if(this.yPos>this.canvas.height){
    console.log("found and should delete");
    return false;
  }
  return true;
}
} //end letter object
