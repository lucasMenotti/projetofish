var swimleft, swimright, restleft, restright, peixe;
var score = 0;
var fundo;
var rotdir = 1;
var inimigo_img, inimigo, grupoInimigo;
var estadoJogo = "start";
var play,restart;
var pontos;
function preload() {
swimleft = loadAnimation("./assets/swim_to_left/1.png","./assets/swim_to_left/2.png","./assets/swim_to_left/3.png","./assets/swim_to_left/4.png","./assets/swim_to_left/5.png", "./assets/swim_to_left/6.png");
fundo = loadImage("./assets/backmenu.png");
swimright = loadAnimation("./assets/Swim_to_right/1.png","./assets/Swim_to_right/2.png","./assets/Swim_to_right/3.png","./assets/Swim_to_right/4.png","./assets/Swim_to_right/5.png", "./assets/Swim_to_right/6.png");
restleft = loadAnimation("./assets/Rest_facing_left/1.png","./assets/Rest_facing_left/2.png","./assets/Rest_facing_left/3.png","./assets/Rest_facing_left/4.png","./assets/Rest_facing_left/5.png", "./assets/Rest_facing_left/6.png");
restright = loadAnimation("./assets/Rest_facing_right/1.png","./assets/Rest_facing_right/2.png","./assets/Rest_facing_right/3.png","./assets/Rest_facing_right/4.png","./assets/Rest_facing_right/5.png", "./assets/Rest_facing_right/6.png");
inimigo_img = loadAnimation("./assets/1.png","./assets/2.png","./assets/3.png","./assets/4.png","./assets/5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fundosprite = createSprite(windowWidth/2, windowHeight/2);
  fundosprite.addImage(fundo);
  fundosprite.scale = 2
  fundosprite.x = fundo.width/2
  fundosprite.velocityX = 0 
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  peixe = new player();
  grupoInimigo = new Group();
  play = createSprite(windowWidth/2, windowHeight/2,100,100);
  restart = createSprite(windowWidth/2, windowHeight/2,100,100);

}

function draw() {
  background("white");
 //console.log(fundosprite.x)
 if(estadoJogo === "start"){
 if (mousePressedOver(play)){
 estadoJogo = "jogar"
 }
 }
 if(estadoJogo === "jogar"){
  fundosprite.velocityX = -8 
  if(fundosprite.x < 0){
    fundosprite.x = fundo.width/2
   }
   play.visible = false;
   restart.visible = false;
   peixe.rotaciona();
   console.log("estou no jogo");
   if (frameCount%60 === 00){
    gerarInimigos(); 
    } 
    if(grupoInimigo.overlap(peixe.body)){
    console.log("morreu");
    estadoJogo = "encerrar";
    }
}
if(estadoJogo === "encerrar"){
 console.log("encerrar");
 fundosprite.velocityX = 0 
 peixe.body.velocityY = 0
 grupoInimigo.setVelocityXEach(0);
 grupoInimigo.setLifetimeEach(-1);
 restart.visible = true;
 if (mousePressedOver(restart)){
  reiniciar();
 }
  
}
drawSprites();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
function keyPressed(){
 if(estadoJogo === "jogar")
  peixe.muda();
}
function gerarInimigos(){
  inimigo = new enemy();
  grupoInimigo.add(inimigo.body);
  }
  
 function reiniciar(){
  estadoJogo = "start"; 
  restart.visible = false;
  grupoInimigo.destroyEach();
  peixe.body.x = 200;
  peixe.body.y = 200;
  
 }