let centerX = 0;
let centerY = 0;
var config = {
    type: Phaser.AUTO,
    height: 820,
    width: `100%`,
    physics: {
        default: `arcade`,
        arcade: {
            gravity: {y: 500}
        }
    },
    scene: [Menu, Game, PauseMenu],
    centerX: document.documentElement.clientWidth / 2 - 100,
    centerY: document.documentElement.clientHeight / 2 - 100
};

var game = new Phaser.Game(config);
