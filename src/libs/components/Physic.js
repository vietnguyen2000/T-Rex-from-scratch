import MyComponent from "../MyComponent.js";
import Vec2 from "../../utils/Vec2.js";
import inputManager from "../../input/InputManager.js";
const g = 9.8
class Physic extends MyComponent {
    constructor(myGameObject, gravityScale = 1) {
        super(myGameObject);
        this.g = 9.8 * gravityScale;
        this.gravityScale = gravityScale;
        this.force = new Vec2(0,0);
        this.velocity = new Vec2(0,0);

        this._landGround = -20;
    }

    update(time, delta) {
        if (this.gravityScale) {
            this.velocity = Vec2.add(this.velocity,Vec2.mul(new Vec2(this.force.x, this.force.y - g*this.gravityScale),delta/1000));
        }
        
        this.gameObject.setPosition(Vec2.add(this.gameObject.getPosition(), Vec2.mul(this.velocity, delta/1000)));

        if (this.gravityScale){
            if (this.gameObject.getPosition().y < this._landGround ) { // Ground
                this.velocity = new Vec2(this.velocity.x, 0);
                this.g = 0;
                this.force
                this.gameObject.setPosition(new Vec2(this.gameObject.getPosition().x, this._landGround))
                
            }
        }
    }


}

export default Physic