// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   createCanvas(800,700)

ground= new Ground(400,690,800,20);
Sball=new ShootBall(200,600,10,10);
tanker=new Tanker(600,600,40,80);
//Cball=new CanonBall();
//Cball.positionX=random(300,800);
//Cball.positionY=650;
Sball.velocityX=0;
SBall.velocityY=0;



}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
background(0);

ground.display();
Sball.display();
tanker.display();
Cball.display();

}

if(keyDown(UP_ARROW)){
    SBall.velocityX=5;
    Sball.velocityY=1;
}


function keyReleased() {
    // Call the shoot method for the cannon.
}