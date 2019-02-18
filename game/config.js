var config = {
    type: Phaser.AUTO,
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
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
