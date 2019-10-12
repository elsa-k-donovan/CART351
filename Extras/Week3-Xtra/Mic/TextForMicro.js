function myTextNode(context,canvas){
  this.canvas = canvas;
  this.context = context;
  this.fontString = "30px Arial";


  this.render = function(){
  this.context.font = this.fontString;
  this.context.fillStyle = "#FFFFFF";
  this.context.fillText("Hello World",this.canvas.width/2-100,this.canvas.height/2);
}

this.update =function(input){
  let fontArgs = this.fontString.split(' ');
  let newSize = input+'px';
  this.fontString = newSize + ' ' + fontArgs[fontArgs.length - 1];

}
}
