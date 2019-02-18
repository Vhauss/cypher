class PauseMenu extends Phaser.Scene {
    constructor() {
        super({key: "pauseMenu"})
    }

    create() {
        const option1 = this.add.text(config.centerX,config.centerY - 100, "Option 1");
        const option2 = this.add.text(config.centerX,config.centerY - 50, "Option 2");
        const option3 = this.add.text(config.centerX,config.centerY, "Option 3");
        const option4 = this.add.text(config.centerX,config.centerY + 50, "Option 4");
        const option5 = this.add.text(config.centerX,config.centerY + 100, "Option 5");

        const exitMenu = this.add.text(config.centerX, config.centerY + 150,"Exit menu", {
            font: "30px"
        });

        exitMenu.setInteractive();

        exitMenu.on('pointerup', () => { 
            this.scene.switch('game');
        });
    }
}