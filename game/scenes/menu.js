class Menu extends Phaser.Scene {
    constructor() {
        super({key: "menu"})
    }

    preload() {
        this.load.image('logo', "game/assets/logo.png")
    }

    create() {

        // Canvas init
        var canvas = document.getElementsByTagName('canvas');
        let centerX = canvas[0].width / 2 - 100;
        let centerY = canvas[0].height / 2;

        // Options
        const title = this.add.text(100,100, "Cypher", {font: "40px Impact"});

        var tween = this.tweens.add({
            targets: title,
            x: centerX,
            y: centerY -150,
            duration: 1000,
            ease: "Linear",
            easeParams: [1.5,0.5],
            delay: 1000,
            onComplete: (src, trg) => {
                trg[0].setColor('Red')
                trg[0].setFontSize("90px")

                const startGame = this.add.text(centerX + 40, centerY + 50,"Start game", {
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