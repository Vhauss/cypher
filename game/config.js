var config = {
    type: Phaser.AUTO,
    height: document.documentElement.clientHeight - 5,
    width: document.documentElement.clientWidth,
    physics: {
        default: `arcade`,
        arcade: {
            gravity: {y: 500}
        }
    },
    scene: [Menu, Game, PauseMenu],
    // Custom config options
    centerX: document.documentElement.clientWidth / 2 - 100,
    centerY: document.documentElement.clientHeight / 2 - 100,
    keyCode: Phaser.Input.Keyboard.KeyCodes,
    tileSize: 50
};

var game = new Phaser.Game(config);
