import Obtacle from "../Obtacle.js";

class Cactus extends Obtacle {
    constructor(pos) {
        super(pos);
        let image = new Image();
        image.src = 'art/Cactus/Cactus-0' + String(Math.floor(Math.random() * 6) + 1) + '.png';
        this.sprite.setSprite(image);
    }
    reset() {
        super.reset();
        let image = new Image();
        image.src = 'art/Cactus/Cactus-0' + String(Math.floor(Math.random() * 6) + 1) + '.png';
        this.sprite.setSprite(image);
    }
}

export default Cactus;