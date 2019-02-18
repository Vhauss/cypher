class Game extends Phaser.Scene {
    constructor() {
        super({key: "game"});
    }

    create() {
        this.character = this.add.sprite(config.centerX,config.centerY, "logo");
        this.character.displayHeight = config.tileSize;
        this.character.displayWidth = config.tileSize;
        this.character.collideWorldBounds = true;

        const options = this.add.text(10, 10, "Pause = P, Split = Space");

        // Vertical controls
        this.key_W = this.input.keyboard.addKey(config.keyCode.W);
        this.key_S = this.input.keyboard.addKey(config.keyCode.S);

        // Horizontal controls
        this.key_A = this.input.keyboard.addKey(config.keyCode.A);
        this.key_D = this.input.keyboard.addKey(config.keyCode.D);

        // Other listeners 
        this.input.keyboard.on('keyup_W', (event) => {this.character.y -= config.tileSize}, this);
        this.input.keyboard.on('keyup_A', (event) => {this.character.x -= config.tileSize}, this);
        this.input.keyboard.on('keyup_S', (event) => {this.character.y += config.tileSize}, this);
        this.input.keyboard.on('keyup_D', (event) => {this.character.x += config.tileSize}, this);

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