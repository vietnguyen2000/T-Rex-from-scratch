import BoxCollider from "../../libs/components/BoxCollider.js";
import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyComponent from "../../libs/MyComponent.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";

class ObtacleController extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this.physic = this.gameObject.getComponent('Physic');

        this.setSpeed(200);
    }

    setSpeed(speed) {
        this.physic.velocity = new Vec2(-speed,0)
    }

    update(time, delta) {
        let collider = this.gameObject.getComponent('BoxCollider');
        if (collider.isTouch(this.gameObject.player.getComponent('BoxCollider'))) {
            console.log('DIE')
        };
    }
}

export default ObtacleController;