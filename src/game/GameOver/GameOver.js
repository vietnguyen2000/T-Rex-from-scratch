import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";

class GameOver extends MyGameObject {
    constructor(pos) {
        super(pos);
        this.sprite = new Sprite(this)
        let img = new Image();
        img.src = 'art/GameOver/GameOver.png'
        this.sprite.setSprite(img);
    }
}

export default GameOver