class Villian extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('rabbitGuy');
        this.setPosition(x, y);
        this.displayHeight = config.tileSize;
        this.displayWidth = config.tileSize;

        this.scene.input.keyboard.on('keydown', (event) => {
            if( event.key == "w" || 
                event.key == "a" ||
                event.key == "s" ||
                event.key == "d") {
                let directionObject = config.move(this.x, this.y);                
                if(directionObject.direction == "x") {
                    this.x = directionObject.value;
                } else {
                    this.y = directionObject.value;
                }
            }
        }, this.scene);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);
    }
}