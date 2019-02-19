class Character extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('logo');
        this.setPosition(x, y);
        this.displayHeight = config.tileSize;
        this.displayWidth = config.tileSize;

        this.scene.input.keyboard.on('keydown', (event) => {         

            if( event.key == "w" ) {
                this.y -= config.tileSize;
            }
            else if( event.key == "a" ) {
                this.x -= config.tileSize;
            }
            else if( event.key == "s" ) {
                this.y += config.tileSize;
            }
            else if( event.key == "d" ) {
                this.x += config.tileSize;
            }

            let isValid = config.checkBounds(this.x, this.y)
            if (!isValid.valid) {
                let recoverObj = config.recoverEntity(isValid.direction,this.x, this.y);
                if(recoverObj.direction == "x") {
                    this.x = recoverObj.value;
                } else {
                    this.y = recoverObj.value;
                }
            }   
        }, this.scene);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

    }


}