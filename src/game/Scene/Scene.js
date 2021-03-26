import MyGameObject from '../../libs/MyGameObject.js'
import Vec2 from '../../utils/Vec2.js'
import Sprite from '../../libs/components/Sprite.js'
import SpriteAnimation from '../../libs/components/SpriteAnimation.js'
import Physic from '../../libs/components/Physic.js'
import Ground from '../Ground/Ground.js'
import Dinosaur from '../Dinosaur/Dinosaur.js'

class Scene {
    constructor() {
        this.ground = new Ground(new Vec2(900,-55));

        this.dinosaur = new Dinosaur(new Vec2(-220,50));


    }
}

export default Scene;