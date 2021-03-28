import inputManager from "../input/inputManager.js";
import MyComponent from "../libs/MyComponent.js";
import MyGameObject from "../libs/MyGameObject.js";
import ObjectPooler from "../utils/ObjectPooler.js";
import Vec2 from "../utils/Vec2.js";
import Cactus from "./Obtacle/Cactus/Cactus.js";

class GameManagerController extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this._timeGenerate = 0;
        this._rate = 0.5;
    }
    update(time, delta) {
        this.gameObject.score = (time - this.gameObject.startTime)/100;
        // console.log(this.gameObject.score)
    }
    
    // generateCactus(delta){
    //     this._timeGenerate += delta;
    //     if (this._timeGenerate > this._rate) {
    //         let Cactus = this.gameObject.CactusPooler.getInstance();
    //         Cactus.player = this.gameObject.player;
    //         Cactus.GameManagerScript = this;
    //     }   
    // }
}

class GameManager extends MyGameObject {
    constructor(pos = new Vec2(0,0), player, ground){
        super(pos);
        this.player = player;
        this.ground = ground;
        this.CactusPooler = new ObjectPooler(Cactus,20);
        this.gameManagerController = new GameManagerController(this);
        this.gameCore.gameManagerScript = this.gameManagerController;
        this.pause = true;
        this.highscore = 0;
        this.score = 0;
        this.startTime = window.performance.now();
        this.playGame();
    }

    playGame() {
        this.score = 0;
        this.startTime = window.performance.now();
    }
    pauseGame(){
        this.pause = true;
    }
    resume(){
        this.pause = false;
    }
    gameOver() {
        this.highscore = Math.max(this.score,this.highscore);
    }
}

export default GameManager