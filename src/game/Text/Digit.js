import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";
class Digit extends MyGameObject {
    constructor(pos, digit = 0 ) {
        super(pos);
        this.digit = digit;
        this.sprite = new Sprite(this);
        let img = new Image();
        img.src = `art/Number/${this.digit}.png`;
        this.sprite.setSprite(img)
    }
    setDigit(digit) {
        this.digit = digit;
        let img = new Image();
        img.src = `art/Number/${this.digit}.png`;
        this.sprite.setSprite(img)
    }
}

export default Digit;