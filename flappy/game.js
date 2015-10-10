 'use strict';

 // Globals (visible to all functions)
var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
    {preload:preload,create:create,update:update,render:render});
    
var background, flappy, pipe1t, pipe1b, pipe2t, pipe2b, pipe3t, pipe3b, centery;

function preload() {
  game.load.image("background","assests/background,gif");
  game.load.spritesheet("flappy","assets/flappy.png",46,56);
  game.load.image("pipet","assets/pipet.gif");
  game.load.image("pipeb","assets/pipeb.gif");
}

function create() {

  centery = game.height/2;
  game.physics.startSystem(Phaser.Physics.ARCADE);

    // Turn on background
    background = game.add.tileSprite(0,0,320,568,"background");
    background.autoScroll(-100,0);

    //Give birth to flappy
    flapp = game.add.spite(10,284,"flappy");
    //Flappy.scale.set(2);
    flappy.smoothed = false;
    flappy.animations.add('fly', [0,1,2], 10, true);
    flappy.play('fly');
    game.physics.enable(flappy, Phaser.Physics.ARCADE);
    flappy.body.gravity.y = 1300;
    flappy.body.collideWorldBounds = true;

    //Add in pipes
    pipe1t = game.add.sprite(400, 30,"pipe1t");
    pipe1b = game.add.sprite(400, 30,"pipe1b");
    pipe2t = game.add.sprite(600, 30,"pipe2t");
    pipe2b = game.add.sprite(600, 30,"pipe2b");
    pipe3t = game.add.sprite(800, 30,"pipe3t");
    pipe3b = game.add.sprite(800, 30,"pipe3b");

    game.physics.enable(pipe1t, Phaser.Physics.ARCADE);
    game.physics.enable(pipe1b, Phaser.Physics.ARCADE);
    game.physics.enable(pipe2t, Phaser.Physics.ARCADE);
    game.physics.enable(pipe2b, Phaser.Physics.ARCADE);
    game.physics.enable(pipe3t, Phaser.Physics.ARCADE);
    game.physics.enable(pipe3b, Phaser.Physics.ARCADE);

    pipe1t.body.velocity.x = -100;
    pipe1b.body.velocity.x = -100;
    pipe2t.body.velocity.x = -100;
    pipe2b.body.velocity.x = -100;
    pipe3t.body.velocity.x = -100;
    pipe3b.body.velocity.x = -100;

    //Spam mouse or space to flap   
    function flap() { flappy.body.velocity.y = -400; }
    game.input.onDown.add(flap);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(flap);

}

function update() {
  if (pipe1t.x < -100) {
    startPipe(pipe1t,pipe1b);
  }
  if (pipe2t.x < -100) {
    startPipe(pipe2t,pipe2b);
  }
  if (pipe3t.x < -100) {
    startPipe(pipe3t,pipe3b);
  }
}

function render() {
}
