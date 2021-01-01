var BlueHill, BlueHillImage
var SonicRun, SonicRunImage
var spike, spikeImage

function preload(){
SonicRunImage = loadImage("images/SonicRun.gif");
BlueHillImage = loadImage("images/Blue_Hill.png")
spikeImage = loadImage("images/spike.png")

}

function setup() {
  createCanvas(800, 800); 
  background("white")

  BlueHill = createSprite(400,400,800,800);
  BlueHill.addImage("Blue_Hill", BlueHillImage)
  BlueHill.scale = 5
    
  SonicRun = createSprite(200,550,50,50);
  SonicRun.addImage("SonicRun", SonicRunImage);
  SonicRun.scale = 1
  
  spike = createSprite(800,600,50,50);
  spike.addImage("spike", spikeImage);
  spike.scale = 0.5



}

function draw() {

 
  if(keyDown(RIGHT_ARROW)) {
    SonicRun.x = SonicRun.x + 10
    camera.position.x = SonicRun.x
    spike.x = spike.x - 5
 
    }
    if(keyDown(LEFT_ARROW)){
      SonicRun.x = SonicRun.x - 10
      camera.position.x = SonicRun.x
      spike.x = spike.x + 5
      }
   if(SonicRun.isTouching(spike)){
     SonicRun.hide()
     BlueHill.hide()
     spike.hide()
   }
  

 drawSprites();
}
