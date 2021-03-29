import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";

class Replay extends MyGameObject {
    constructor(pos) {
        super(pos);
        this.sprite = new Sprite(this,1)
        let img = new Image();
        img.src = 'art/GameOver/Replay.png'
        this.sprite.setSprite(img);
    }
}

export default Replay;