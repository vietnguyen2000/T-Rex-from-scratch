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

        this.jumpForce = 400;
        this._boost = false;
    }
    reset() {
        super.reset();
        this.state = RUN;
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
                        this.physic.velocity = new Vec2(0,this.jumpForce*1.3);
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
                        if (this.physic.velocity.y < this.jumpForce)
                            this.physic.velocity = new Vec2(0,this.jumpForce);
                        if (this.gameObject.getPosition().y > this.physic._landGround + 50){
                            this._boost = false
                        }
                
                    }
                
                if (inputManager.getKeyPress(inputManager.keyCode.DOWN)) {
                    if (this.physic.velocity.y > 0 ){
                        this.physic.velocity = new Vec2(0, -20);    
                    }
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y*1.5);
                }
                else if (inputManager.getKeyUp(inputManager.keyCode.DOWN)) {
                    this.physic.velocity = new Vec2(0, this.physic.velocity.y/1.5);
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
                if (this.gameObject.getPosition().y <= this.physic._landGround){
                    this.state = RUN;
                }
                break;
            case DIE:
                this.gameObject.getComponent('SpriteAnimator').play(DIE);
                
        }
        
    }
    pause(time, delta) {
        this.gameObject.getComponent('SpriteAnimator').play(DIE);
    }
}

export default DinosaurController;