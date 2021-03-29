import MyGameObject from '../../libs/MyGameObject.js'
import Vec2 from '../../utils/Vec2.js'
import Sprite from '../../libs/components/Sprite.js'
import SpriteAnimation from '../../libs/components/SpriteAnimation.js'
import Physic from '../../libs/components/Physic.js'
import Ground from '../Ground/Ground.js'
import Dinosaur from '../Dinosaur/Dinosaur.js'
import Cactus from '../Obtacle/Cactus/Cactus.js'
import GameManager from '../gameManager.js'
import MyNumber from '../Text/MyNumber.js'
import HighScore from '../Text/HighScore.js'
import GameOver from '../GameOver/GameOver.js'
import Replay from '../GameOver/Replay.js'
import Cloud from '../Cloud/Cloud.js'

class Scene {
    constructor() {
        this.cloud1 = new Cloud(new Vec2(300,0), 12)
        this.cloud2 = new Cloud(new Vec2(150,20), 15)
        this.cloud3 = new Cloud(new Vec2(-100,50), 17)

        this.obj = {
            ground: new Ground(new Vec2(900,-65)),
            player:new Dinosaur(new Vec2(-250,-65)),
            score: new MyNumber(new Vec2(260,60)),
            highScore: new HighScore(new Vec2(190,60)),
            fps: new MyNumber(new Vec2(-260,60),2),
            gameOver: new GameOver(new Vec2(0,30)),
            replay: new Replay(new Vec2(0,-20))
        }

        
        this.gameManager = new GameManager(new Vec2(0,0), this.obj);
        // this.cactus = new Cactus(new Vec2(300,-65));
    }
}

export default Scene;