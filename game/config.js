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
    scene: [Menu, Game, PauseMenu]
};

var game = new Phaser.Game(config);