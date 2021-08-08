var ground;
var backgroundImage;
var rocket , rocketImage;
var planet1 , planet2 , planet3 , planet4 , planet5 , planet6 , planet7 , planet8 , planet9;

function preload(){
  backgroundImage = loadImage("backImage.jpg");
  rocketImage = loadImage("rocketImage.png");
  planet1 = loadImage("Planets 1.jpg");
  planet2 = loadImage("Planets 2.jpg");
  planet3 = loadImage("Planets 3.jpg");
  planet4 = loadImage("Planets 4.jpg");
  planet5 = loadImage("Planets 5.jpg");
  planet6 = loadImage("Planets 6.jpg");
  planet7 = loadImage("Planets 7.jpg");
  planet8 = loadImage("Planets 8.jpg");
  planet9 = loadImage("Planets 9.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight/2,50,height);
  ground.addImage(backgroundImage,"backImage.jpg");
  ground.velocityY = 2;

  rocket = createSprite(600,400);
  rocket.addImage(rocketImage,"rocketImage.png");
}

function draw() {
  background(0);  

  if(ground.y > height-100){
    ground.y = windowHeight/2;
  }

  if(keyDown("left_arrow")){
    rocket.x -= 2;
  }

  if(keyDown("right_arrow")){
    rocket.x += 2;
  }

  spawnPlanet();
  drawSprites();
}

function spawnPlanet(){
  if(frameCount % 120 == 0){
    var planet = createSprite(200,20,80,80);
    planet.x = Math.round(random(50,windowWidth-50));
    planet.velocityY = +2;
    planet.scale = 0.3;
    var rand = Math.round(random(1,9));
    switch(rand){
      case 1: planet.addImage(planet1);
      break ;
      case 2: planet.addImage(planet2);
      break ;
      case 3: planet.addImage(planet3);
      break ;
      case 4: planet.addImage(planet4);
      break ;
      case 5: planet.addImage(planet5);
      break ;
      case 6: planet.addImage(planet6);
      break ;
      case 7: planet.addImage(planet7);
      break ;
      case 8: planet.addImage(planet8);
      break ;
      case 9: planet.addImage(planet9);
      break ;
      default : break;

    }
  }
}

