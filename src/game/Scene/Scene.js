import MyGameObject from '../../libs/MyGameObject.js'
import Vec2 from '../../utils/Vec2.js'
import Sprite from '../../libs/components/Sprite.js'
import SpriteAnimation from '../../libs/components/SpriteAnimation.js'
import Physic from '../../libs/components/Physic.js'
import Ground from '../Ground/Ground.js'
import Dinosaur from '../Dinosaur/Dinosaur.js'
import Cactus from '../Obtacle/Cactus/Cactus.js'
import GameManager from '../gameManager.js'

class Scene {
    constructor() {
        this.ground = new Ground(new Vec2(900,-65));

        this.dinosaur = new Dinosaur(new Vec2(-250,-65));

        this.cactus = new Cactus(new Vec2(300,-65));

        this.gameManager = new GameManager(new Vec2(0,0), this.dinosaur, this.ground);
    }
}

export default Scene;