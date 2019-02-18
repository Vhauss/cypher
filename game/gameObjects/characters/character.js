class Character extends Phaser.GameObjects.Sprite {

    constructor (scene, x, y)
    {
        super(scene, x, y);

        this.setTexture('logo');
        this.setPosition(x, y);

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
        }, this.scene);
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

    }


}