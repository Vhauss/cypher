class Game extends Phaser.Scene {
    constructor() {
        super({key: "game"});
    }

    create() {
        this.character = this.add.existing(new Character(this, config.centerX, config.centerY));
        const options = this.add.text(10, 10, "Pause = P, Split = Space");

        // Mouse Listener
        this.input.on('pointerdown', (event) => {
            this.character.x = event.x;
            this.character.y = event.y;
        }, this);

        // Physics example
        this.input.keyboard.on('keyup_SPACE', (event) => {
            var physicsImage = this.physics.add.image(this.character.x, this.character.y, "logo");
            physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100, 100), -300);
        }, this);

        // Pause game
        this.input.keyboard.on('keyup', (e) => {
            if( e.key == "p" ) {
                this.scene.switch('pauseMenu');
            }
        }, this);
    }

    update(delta) {
        // Polling for WASD
        // if(this.key_W.isDown) {this.character.y -= 5}
        // if(this.key_A.isDown) this.character.x -= 5
        // if(this.key_S.isDown) {this.character.y += 5}
        // if(this.key_D.isDown) {this.character.x += 5}
    }
}