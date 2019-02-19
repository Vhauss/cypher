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
    tileSize: 50,
    // Global functions
    getRandomInt: function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    },
    move: function(x, y) {
        let directionObj = this.checkBounds(x, y);
        
        if (directionObj.valid) {
            var direction = this.getRandomInt(4)            
            switch(direction) {
                case 0 : return {
                    direction: "y",
                    value: y += 50
                };
                case 1 : return {
                    direction: "y",
                    value: y -= 50
                };
                case 2 : return {
                    direction: "x",
                    value: x += 50
                }
                case 3 : return {
                    direction: "x",
                    value: x -= 50
                };
            }   
        } else { return this.recoverEntity(directionObj.direction, x, y) }
    },
    checkBounds: function(x, y) {
        if(x >= config.width -50) { return { direction: "right", valid: false }; }
        else if(x <= 50 ) { return { direction: "left", valid: false }; }
        else if(y >= config.height -50) { return { direction: "bottom", valid: false }; }
        else if(y <= 50 ) { return { direction: "top", valid: false }; }
        else { return {direction: "valid", valid: true}; }
    },
    recoverEntity: function (direction, x, y) {
        switch (direction) {
            case "top": 
                return {
                    direction: "y",
                    value: y += 50
                }
            case "bottom": 
                return {
                    direction: "y",
                    value: y -= 50
                }
            case "left": 
                return {
                    direction: "x",
                    value: x += 50
                }
            case "right": 
                return {
                    direction: "x",
                    value: x -= 50
                }
            default:
                break;
        }
    }
};


var game = new Phaser.Game(config);
