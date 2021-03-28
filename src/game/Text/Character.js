import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";
class Character extends MyGameObject {
    constructor(pos, char = H, src = 'art/Number/') {
        super(pos);
        this.char = char;
        this.src = src;
        let sprite = new Sprite(this);
        let img = new Image();
        img.src = `${this.src}${this.char}.png`;
        sprite.setSprite(img)
    }
    setChar(char) {
        this.char = char;
        let sprite = new Sprite(this);
        let img = new Image();
        img.src = `${this.src}${this.char}.png`;
        sprite.setSprite(img)
    }
}

export default Character;