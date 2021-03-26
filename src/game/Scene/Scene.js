import MyGameObject from '../../libs/MyGameObject.js'
import Vec2 from '../../utils/Vec2.js'
import Sprite from '../../libs/components/Sprite.js'
class Scene{
    constructor(){
        // Generate Dinosaur
        this.test = new MyGameObject(new Vec2(20,20));
        let sprite = new Sprite(this.test);
        let image = new Image();
        image.src='art/Dino_prepare.png';
        sprite.setSprite(image)
        this.test.addComponent(sprite);
    }
}

export default Scene;