import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import SpriteAnimator from "../../libs/components/SpriteAnimator.js";
import SpriteAnimation from "../../libs/components/SpriteAnimation.js";
import MyComponent from "../../libs/MyComponent.js";
import Vec2 from "../../utils/Vec2.js";
import inputManager from "../../input/InputManager.js";

const IDLE = 'idle';
const RUN = 'run';
const JUMP = 'jump';
const FALL = 'fall';
const DIE = 'die';

const CROUCH = 'crouch';

class DinosaurController extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this.physic = this.gameObject.getComponent('Physic');
        this.state = RUN

        this._boost = false;
    }
    update(time, delta) {
        switch(this.state){
            case RUN:
                if (inputManager.getKeyPress(inputManager.keyCode.DOWN)){
                    this.gameObject.getComponent('SpriteAnimator').play(CROUCH);
                }
                else{
                    this.gameObject.getComponent('SpriteAnimator').play(RUN);
                }
                
                if (inputManager.getKeyDown(inputManager.keyCode.SPACE) ||
                    inputManager.getKeyDown(inputManager.keyCode.UP)) {
                        this.physic.velocity = new Vec2(0,300);
                        this.physic.g = 9.8;
                        this.state = JUMP;
                        this._boost = true;
                        
                }
                break;
            case JUMP:
                this.gameObject.getComponent('SpriteAnimator').play(IDLE);
                if (!inputManager.getKeyPress(inputManager.keyCode.UP) && inputManager.getKeyPress(inputManager.keyCode.SPACE)){
                    this._boost = false;
                }
                if ((this._boost) && 
                        (inputManager.getKeyPress(inputManager.keyCode.SPACE) ||
                        inputManager.getKeyPress(inputManager.keyCode.UP)) 
                    ) 
                    {
                        this.physic.velocity = new Vec2(0,300);
                        if (this.gameObject.getPosition().y > -15){
                            this._boost = false
                        }
                
                    }
                
                if (inputManager.getKeyPress(inputManager.keyCode.DOWN)) {
                    if (this.physic.velocity.y > 0 ){
                        this.physic.velocity = new Vec2(0, -10);    
                    }
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y*1.2);
                }
                else if (inputManager.getKeyUp(inputManager.keyCode.DOWN)) {
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y/1.2);
                }
                if (this.physic.velocity.y <=0){
                    this.state = FALL;
                }
                break;
            case FALL:
                
                if (inputManager.getKeyPress(inputManager.keyCode.DOWN)) {
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y*1.2);
                }
                else if (inputManager.getKeyUp(inputManager.keyCode.DOWN)) {
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y/1.2);
                }
                if (this.gameObject.getPosition().y <= -55){
                    this.state = RUN;
                }
                break;
        }
        
    }
}

export default DinosaurController;