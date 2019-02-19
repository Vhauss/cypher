class Menu extends Phaser.Scene {
    constructor() {
        super({key: "menu"})
    }

    preload() {
        //Load Graphical Assets
        this.load.image('logo', "game/assets/logo.png")
        this.load.image('rabbitGuy', "game/assets/rabbitGuy.png")
        //Load Audio Assets
        //Load Scirpts
        this.load.script("characterScript", "game/gameObjects/characters/character.js");
        this.load.script("villianScript", "game/gameObjects/npcs/bad/villian.js");
    }

    create() {
        // Options
        const title = this.add.text(100,100, "Cypher", {font: "40px Impact"});

        var tween = this.tweens.add({
            targets: title,
            x: config.centerX,
            y: config.centerY -150,
            duration: 1000,
            ease: "Linear",
            easeParams: [1.5,0.5],
            delay: 1000,
            onComplete: (src, trg) => {
                trg[0].setColor('Red')
                trg[0].setFontSize("90px")

                const startGame = this.add.text(config.centerX + 40, config.centerY + 50,"Start game", {
                    font: "30px"
                });

                startGame.setInteractive();

                startGame.on('pointerup', () => { 
                    this.scene.start("game")
                });
            }
        }, this);

        // Manual scene change
        // this.input.keyboard.on('keyup', (e) => {
        //     if( e.key == "1" ) {
        //         this.scene.start("game")
        //     }
        // }, this);
    }
}