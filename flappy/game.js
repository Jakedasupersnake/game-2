'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
    {preload:preload,create:create,update:update,render:render});

var background;

var flappy;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background", "background.gif");
  game.load.image("flappy", "flappy.gif");
}

function create() {
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0);
  flappy = game.add.Sprite(40,40,'flappy'); }

function update() {
}

function render() {
}
