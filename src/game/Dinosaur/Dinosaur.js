import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import SpriteAnimator from "../../libs/components/SpriteAnimator.js";
import SpriteAnimation from "../../libs/components/SpriteAnimation.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";
import DinosaurController from "./DinosaurController.js"

const IDLE = 'idle'
const RUN = 'run'
const CROUCH = 'crouch'
class Dinosaur extends MyGameObject {
    constructor(pos = new Vec2(20,-10)) {
        super(pos);

        this.sprite = new Sprite(this);
        let image = new Image();
        image.src ='art/Dino_prepare.png';
        this.sprite.setSprite(image);

        //animation
        this.spriteAnimator = new SpriteAnimator(this);
        // add keyframe for idle animation
        let idleAnimation = new SpriteAnimation(60);
        let imageTemp = new Image();
        imageTemp.src = 'art/Dinosaur/Dinosaur-01.png';
        idleAnimation.addKeyFrame(imageTemp);
        this.spriteAnimator.addAnimation(IDLE,idleAnimation)
        
        // add keyframe for run animation
        let runAnimation = new SpriteAnimation(6);
        imageTemp = new Image();
        imageTemp.src = 'art/Dinosaur/Dinosaur-03.png';
        runAnimation.addKeyFrame(imageTemp);
        imageTemp = new Image();
        imageTemp.src = 'art/Dinosaur/Dinosaur-04.png';
        runAnimation.addKeyFrame(imageTemp);
        this.spriteAnimator.addAnimation(RUN, runAnimation);

        // add keyframe for crouch animation
        let crouchAnimation = new SpriteAnimation(6);
        imageTemp = new Image();
        imageTemp.src = 'art/Crouch/Crouch-01.png';
        crouchAnimation.addKeyFrame(imageTemp);
        imageTemp = new Image();
        imageTemp.src = 'art/Crouch/Crouch-02.png';
        crouchAnimation.addKeyFrame(imageTemp);
        this.spriteAnimator.addAnimation(CROUCH,crouchAnimation);

        this.spriteAnimator.play(RUN);

        //Physics
        this.physic = new Physic(this, 100);

        //Controller
        this.controller = new DinosaurController(this);
        

    }
}

export default Dinosaur;