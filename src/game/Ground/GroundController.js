import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyComponent from "../../libs/MyComponent.js";
import Vec2 from "../../utils/Vec2.js"
class GroundController extends MyComponent {
    constructor(myGameObject){
        super(myGameObject);
        this.physic = this.gameObject.getComponent('Physic');
    }
    update(time, delta) {
        if(this.gameObject.getPosition().x <= this.gameObject.defaultPosition.x - 1200) {
            let range = this.gameObject.getPosition().x - (this.gameObject.defaultPosition.x - 1200)
            this.gameObject.setPosition(new Vec2(this.gameObject.defaultPosition.x + range, this.gameObject.defaultPosition.y))
        }
    }
    setSpeed(speed) {
        this.physic.velocity = new Vec2(-speed,0)
    }

}

export default GroundController;