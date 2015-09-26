'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
    {preload:preload,create:create,update:update,render:render});
    
var background;
var flappy;
var pipe1t;
var pipe1b;
var pipe2t;
var pipe2b;

function preload() {
  game.load.image("background","assets/background.gif");
  game.load.image("flappy","assets/flappy.png",46,56);
  game.load.image("pipe","assets/pipe.gif");
}

function create() {
    
    // turn on the background
    background = game.add.tileSprite(0,0,320,568,"background");
    background.autoScroll(-100,0);

    // give birth to flappy
    flappy = game.add.sprite(10,284,"flappy");
    //flappy.scale.set(2);
    flappy.smoothed = false;
    flappy.animations.add('fly', [0,1,2], 10, true);
    flappy.play('fly');
    pipe1b = game.add.sprite(300,500,"pipe");

    // turn on physics, gravity, worldbounds
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(flappy, Phaser.Physics.ARCADE);
    game.physics.enable(pipe1b, Phaser.Physics.ARCADE);
    flappy.body.gravity.y = 1000;
    flappy.body.collideWorldBounds = true;
    pipe1b.body.velocity.x = -100;

    function flap() { flappy.body.velocity.y = -400; }
    game.input.onDown.add(flap);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(flap);
}

function update() {

}

function render() {
}
