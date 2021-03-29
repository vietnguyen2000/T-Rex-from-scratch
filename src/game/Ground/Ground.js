import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";
import GroundController from "./GroundController.js";
class Ground extends MyGameObject {
    constructor(pos = new Vec2(-300,-47)) {
        super(pos);
        // Add sprite
        let img = new Image();
        img.src = 'art/Ground/Ground.png';
        this.sprite = new Sprite(this);
        this.sprite.setSprite(img);

        //add physic
        this.physic = new Physic(this,0);
        this.physic.velocity = new Vec2(-300,0);

        //add controller
        this.controller = new GroundController(this);
    }
}

export default Ground;