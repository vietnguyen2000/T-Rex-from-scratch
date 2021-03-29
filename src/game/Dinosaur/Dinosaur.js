import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import SpriteAnimator from "../../libs/components/SpriteAnimator.js";
import SpriteAnimation from "../../libs/components/SpriteAnimation.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";
import DinosaurController from "./DinosaurController.js"
import BoxCollider from "../../libs/components/BoxCollider.js";

const IDLE = 'idle'
const RUN = 'run'
const CROUCH = 'crouch'
const DIE = 'die'
class Dinosaur extends MyGameObject {
    constructor(pos = new Vec2(35,-55)) {
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

        // add key frame for die animation
        let dieAnimation = new SpriteAnimation(60);
        imageTemp = new Image();
        imageTemp.src = 'art/Dinosaur/Dinosaur-06.png';
        dieAnimation.addKeyFrame(imageTemp);
        this.spriteAnimator.addAnimation(DIE, dieAnimation);

        this.spriteAnimator.play(RUN);

        //Physics
        this.physic = new Physic(this, 200);
        

        //Collider
        this.collider = new BoxCollider(this)
        
        //Controller
        this.controller = new DinosaurController(this);
        
        this.gameCore.player = this
    }
}

export default Dinosaur;