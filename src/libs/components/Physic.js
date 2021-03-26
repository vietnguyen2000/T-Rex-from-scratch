import MyComponent from "../MyComponent.js";
import Vec2 from "../../utils/Vec2.js";
class Physic extends MyComponent {
    constructor(myGameObject, gravityScale = 1) {
        super(myGameObject);
        this.g = 9.8 * gravityScale;
        this.gravityScale = gravityScale;
        this.force = new Vec2(0,-this.g);
        this.velocity = new Vec2(0,0);
    }

    update(time, delta) {
        if (this.gravityScale) {
            this.velocity = Vec2.add(this.velocity,Vec2.mul(this.force,delta/1000));
        
        
            // console.log(this.gameObject.getPosition())
            if (this.gameObject.getPosition().y <= -10) { // Ground
                this.velocity = new Vec2(this.velocity.x, 0);
                
                this.gameObject.setPosition(new Vec2(this.gameObject.getPosition().x, -10))
            }
        }
        
        this.gameObject.setPosition(Vec2.add(this.gameObject.getPosition(), Vec2.mul(this.velocity, delta/1000)));

    }


}

export default Physic