var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ee9d11fc-9758-40ff-a1af-6269694f79b6"],"propsByKey":{"ee9d11fc-9758-40ff-a1af-6269694f79b6":{"name":"puck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var gameState= "serve";

var trave1=createSprite(200,18,100,20);
trave1.shapeColor=("whithe");

var trave2=createSprite(200,382,100,20);
trave2.shapeColor=("whithe");


var striker = createSprite(200,200,10,10);
striker.shapeColor = "white";
striker.setAnimation("puck_1");
striker.scale=0.05;

var player = createSprite(200,50,50,10);
player.shapeColor = "red";

var computer = createSprite(200,350,50,10);
computer.shapeColor = "blue";


var playerScore=0;
var compScore=0;

function draw() {
  
  //SERVE
  //PLAY
  //END
  
  background("green");
  
  computer.x=striker.x;
  
  fill("red");
  textSize(13);
  text("PlayerScore:"+ playerScore,25,185);
  if (gameState == "serve") { 
    text("aperte Espaço para comecar",90,250);
  }

  fill("blue");
  textSize(13);
  text("CompScore:"+ compScore,25,225);
  
  if (gameState == "serve") {
    text("aperte Espaço para comecar",90,250);
  }
  if (keyDown("space")) {
    serve();
    gameState= "play";
  }
  
  if (gameState == "play") {
    player.x=World.mouseX;
     
    if (striker.isTouching(bottomEdge) || compScore == 5 ) {
      gameState = "end";
    }  
    if (striker.isTouching(bottomEdge) || playerScore == 5 ){
       gameState = "end";
    }
    
  }
  
    if (gameState == "end") {
      striker.velocityX = 0;
      striker.velocityY = 0;
      text("Fim de Jogo!",190,150);
    }
  
  paddleMovement();

   for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  

  createEdgeSprites();
  
  striker.bounceOff(edges);
  striker.bounceOff(player);
  striker.bounceOff(computer);
  player.bounceOff(edges);
  computer.bounceOff(edges);

  

 
  drawSprites();
}

function serve() {
  striker.velocityX = 10;
  striker.velocityY = 5;
 
}



function paddleMovement()
{
  if(keyDown("left")){
    player.x = player.x-10;
    
  }
  
  if(keyDown("right")){
    player.x = player.x+10;
    
  }
  
if (striker.isTouching(trave1)) {
  compScore = compScore+1;
  
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
}

if (striker.isTouching(trave2)) {
  playerScore = playerScore+1;
  
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
}



} 


  
  


 




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
