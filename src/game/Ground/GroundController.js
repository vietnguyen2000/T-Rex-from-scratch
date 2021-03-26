import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyComponent from "../../libs/MyComponent.js";
import Vec2 from "../../utils/Vec2.js"
class GroundController extends MyComponent {
    constructor(myGameObject){
        super(myGameObject);
    }
    update(time, delta) {
        if(this.gameObject.getPosition().x <= -1500) {
            this.gameObject.setPosition(this.gameObject.defaultPosition)
        }
    }

}

export default GroundController;