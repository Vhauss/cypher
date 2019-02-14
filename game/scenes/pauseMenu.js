class PauseMenu extends Phaser.Scene {
    constructor() {
        super({key: "pauseMenu"})
    }

    create() {

        var canvas = document.getElementsByTagName('canvas');
        let centerX = canvas[0].width / 2 - 100;
        let centerY = canvas[0].height / 2;

        const option1 = this.add.text(centerX,centerY - 100, "Option 1");
        const option2 = this.add.text(centerX,centerY - 50, "Option 2");
        const option3 = this.add.text(centerX,centerY, "Option 3");
        const option4 = this.add.text(centerX,centerY + 50, "Option 4");
        const option5 = this.add.text(centerX,centerY + 100, "Option 5");

        const exitMenu = this.add.text(centerX, centerY + 150,"Exit menu", {
            font: "30px"
        });

        exitMenu.setInteractive();

        exitMenu.on('pointerup', () => { 
            this.scene.switch('game');
        });
    }
}