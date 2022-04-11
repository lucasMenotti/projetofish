class enemy {
    constructor(){
        this.body = createSprite(width,Math.round(random(height-150,10)),50,10);
        this.body.addAnimation("inimigo",inimigo_img);
        this.body.scale = 1.2;
        this.body.rotation = 0;
        this.velocidade = -7;
        this.body.velocityX = this.velocidade;
        this.body.lifetime = width/2;
        this.body.debug = false;
        this.body.setCollider("rectangle",0,0,70,80,-0);
        }
}
