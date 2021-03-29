import SpriteAnimation from "../../../libs/components/SpriteAnimation.js";
import SpriteAnimator from "../../../libs/components/SpriteAnimator.js";
import Vec2 from "../../../utils/Vec2.js";
import Obtacle from "../Obtacle.js";

class Bird extends Obtacle {
    constructor(pos) {
        super(pos);
        let position = new Vec2(this.getPosition().x,Math.random()*(20+60) - 60);
        this.setPosition(position)
        let flyAnimation = new SpriteAnimation(15);
        let image = new Image();
        image.src = 'art/Bird/Bird-01.png';
        flyAnimation.addKeyFrame(image);

        image = new Image();
        image.src = 'art/Bird/Bird-02.png';
        flyAnimation.addKeyFrame(image);

        this.spriteAnimator = new SpriteAnimator(this);
        this.spriteAnimator.addAnimation('fly', flyAnimation)
        this.spriteAnimator.play('fly')

        this.sprite.setSprite(image);
    }
    reset() {
        super.reset();
        
    }
    onEnable() {
        this.reset();
        let position = new Vec2(this.getPosition().x,Math.random()*(20+60) - 60);
        this.setPosition(position)

    }
}

export default Bird;