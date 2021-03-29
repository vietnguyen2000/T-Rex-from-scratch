import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyComponent from "../../libs/MyComponent.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";

class Cloud extends MyGameObject {
    constructor(pos, speed) {
        super(pos);
        this.sprite = new Sprite(this)
        let img = new Image();
        img.src = 'art/Cloud/Cloud.png';
        this.sprite.setSprite(img)

        let minSpeed = 20;
        let maxSpeed = 50;
        this.physic = new Physic(this, 0);
        this.physic.velocity = new Vec2(-speed, 0);

        this.controller = new CloudController(this);
    }
}

class CloudController extends MyComponent {
    update() {
        if (this.gameObject.getPosition().x < -330) {
            this.gameObject.setPosition(new Vec2(330, this.gameObject.getPosition().y));
        }
    }
}

export default Cloud;