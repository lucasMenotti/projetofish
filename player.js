class player {
constructor(){
this.body = createSprite(200,200,20,20);
this.body.addAnimation("swimleft",swimleft);
this.body.addAnimation("swimright",swimright);
this.body.addAnimation("restleft",restleft);
this.body.addAnimation("restright",restright);
this.body.scale = 0.6;
this.body.rotation = 90;
this.velocidade = 7;
this.body.debug = false;
this.body.setCollider("rectangle",5,-10,270,130,-0);
}
muda(){
 //keyCode 38 = seta pra cima
   if (keyCode===38){
this.body.changeAnimation("swimleft");
this.body.velocityY = -this.velocidade;
 }   
 //keyCode 40 = seta pra baixo
 if (keyCode===40){
    this.body.changeAnimation("swimright");
    this.body.velocityY = this.velocidade;
 }
 if (keyCode===32){
    this.body.changeAnimation("restleft");
 }
 if (keyCode===17){
    this.body.changeAnimation("restright");
 }
}
rotaciona(){
   if(this.body.rotation === 90 && rotdir == 1){
   this.body.rotation = 150;
   rotdir = -1;
   }
   if(this.body.rotation === 90 && rotdir == -1){
      this.body.rotation = 50;
      rotdir = 1;
      }
   if(this.body.rotation === 50 || this.body.rotation === 150){
      this.body.rotation = 90;
      
   }
}
}