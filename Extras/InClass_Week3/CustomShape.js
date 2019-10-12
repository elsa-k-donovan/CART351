function CustomShape(x,y,w,h,r,g,b,a, context, canvas, speedX, speedY){

              //member properties
              this.canvas = canvas;
              this.context = context;
              this.x = x;
              this.y = y;
              this.w = w;
              this.h = h;
              this.r = r;
              this.g = g;
              this.b = b;
              this.a = a;



            this.innerW = this.w/2;
            this.innerH = this.h/2;

            this.innerX = this.x + this.innerW/2;
            this.innerY = this.y + this.innerH/2;

            this.speedX = speedX;
            this.speedY = speedY;



            this.display = function(){

              this.context.fillStyle = "rgba(" + this.r +"," + this.g + ","+ this.b + ","+ this.a + ")";

              this.context.fillRect(this.x, this.y, this.w, this.h);
              this.context.clearRect(this.innerX, this.innerY, this.innerW, this.innerH);

            }

            this.update = function(){
              if((this.x+this.w)>this.canvas.width || this.x < 0){
                this.speedX = this.speedX*=-1;    //changes direction if shape leaves canvas
              }

              if((this.y+this.h)>this.canvas.height || this.y < 0){
                this.speedY = this.speedY*=-1;    //changes direction if shape leaves canvas
              }

              this.x += this.speedX;
              this.y += this.speedY;

              this.innerX = this.x + this.innerW/2; //have small inner black box move with red box
              this.innerY = this.y + this.innerH/2;
            }

            this.collisionTest = function(event){

              if(Math.sqrt(Math.pow((event.clientX-this.x),2)+Math.pow((event.clientY-this.y),2))<this.w/2){
                console.log("rect was hit");
              }



              )

            }



}


          //context.fillStyle = "rgba(255, 0, 0, 255)";
          //context.strokeStyle = "rgba(255, 0, 0, 255)"
          //context.fillRect(canvas.width/2, canvas.height/2,50,50);
          //context.clearRect(canvas.width/2+12.5, canvas.height/2+12.5, 25, 25);
          //context.strokeRect(canvas.width/2, canvas.height/2, 50, 50);

          /* context.strokeStyle = "#8ED6FF";
          let lineLength = 100;
          let x1 = canvas.width/2;
          let y1 = canvas.height/2;
          let x2 = x1+lineLength;
          let y2 = canvas.height/2;
          let x3 = x1+lineLength/2;
          let y3 = y1-lineLength;

          context.beginPath();
          context.moveTo(x1,y1);
          context.lineTo(x2,y2);
          context.lineTo(x3,y3);
          context.lineTo(x1,y1);
          context.lineWidth = 2;
          context.stroke();
          context.closePath();*/
