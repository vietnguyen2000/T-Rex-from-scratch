import MyGameObject from '../../libs/MyGameObject.js'
import Vec2 from '../../utils/Vec2.js'
import Sprite from '../../libs/components/Sprite.js'
import SpriteAnimation from '../../libs/components/SpriteAnimation.js'
class Scene {
    constructor() {
        // Generate Dinosaur
        this.test = new MyGameObject(new Vec2(20,20));
        let sprite = new Sprite(this.test);
        let image = new Image();
        image.src ='art/Dino_prepare.png';
        sprite.setSprite(image)
        this.test.addComponent(sprite);

        let spriteAnimation = new SpriteAnimation(this.test,8);
        let image2 = new Image();
        image2.src='art/Dinosaur/Dinosaur-03.png';
        spriteAnimation.addKeyFrame(image2);
        let image3 = new Image();
        image3.src='art/Dinosaur/Dinosaur-04.png';
        spriteAnimation.addKeyFrame(image3);

        this.test.addComponent(spriteAnimation);
    }
}

export default Scene;