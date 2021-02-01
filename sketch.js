var canvas, backgroundImage,Player;

var gameState = 0;



function preload(){
Background = loadImage("images.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  form = new Form(); 
  Player = createSprite(1000,1000,20,20)
  NpcsGroup = new Group();
  Player.setCollider("rectangle",0,0,100,100);
  // Player.debug = true
}


function draw(){
  background (Background);

  if(gameState===0){
Player.visible=false
  }
  if(gameState===1){
    Player.visible=true
    if(frameCount % 90 ===0){
    
    npcs();}
      }
  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
}
if(Player.isTouching(NpcsGroup)){
NpcsGroup.setVelocityYEach (-10);
var set = Math.round(random(-10,10))
NpcsGroup.setVelocityXEach (set);

}

  form.display();
  drawSprites();
}

function changePosition(x,y){
  Player.x = Player.x + x;
  Player.y = Player.y + y;
}

function npcs(){
  if(frameCount % 90 ===0)
  {
  var rand = Math.round(random(5,10))
  var x = Math.round(random(0,1000))
  for (var i = 0; i < rand; i=i+1) 
  {
    x=x+50
    Npcs = createSprite(x,0,20,20)
 Npcs.velocityY = 10;
  NpcsGroup.add(Npcs);
}}
}