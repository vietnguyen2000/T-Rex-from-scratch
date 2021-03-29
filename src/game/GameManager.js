import inputManager from "../input/InputManager.js";
import MyComponent from "../libs/MyComponent.js";
import MyGameObject from "../libs/MyGameObject.js";
import ObjectPooler from "../utils/ObjectPooler.js";
import Vec2 from "../utils/Vec2.js";
import Cactus from "./Obtacle/Cactus/Cactus.js";

class GameManagerController extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this._timeGenerate = 0;
        this._rate = 2;
        this._score = 0;
        this._highScore = 0;
        this._fps = 0;

        this.playerCol = this.gameObject.player.getComponent('BoxCollider');

        this.cactusPooler = new ObjectPooler(Cactus,20);

        this.listCactus = [];
        this.currentCactus = null;
        
    }

    reset() {
        super.reset();
        this.disableAllObtacles();
        this.gameObject.player.controller.reset();
    }
    update(time, delta) {
        this._score = Math.floor((time - this.gameObject.startTime)/100);
        if (this._score != this.gameObject.score.num)
            this.gameObject.score.setNumber(this._score);
        this._fps = Math.floor(1000/delta)
        if (Math.abs(this._fps-this.gameObject.fps.num) > 3)
            this.gameObject.fps.setNumber(Math.floor(1000/delta))

        this.generateCactus(delta);

        if (this.currentCactus == null) this.currentCactus = this.listCactus.pop();

        if (this.currentCactus != null) {
            if (this.currentCactus.getPosition().x < -300) {
                this.cactusPooler.disableInstance(this.currentCactus);
                this.currentCactus = this.listCactus.pop();
            }
            let col = this.currentCactus.getComponent('BoxCollider');
            if (col.isTouch(this.playerCol)) {
                this.gameOver();
                this.gameObject.pauseGame();
            }
        }  
    }

    render() {
        if (this.currentCactus != null) {
            let col = this.currentCactus.getComponent('BoxCollider');
            col.debugRender();
        }
        
    }

    pause(time, delta) {
        if (inputManager.getKeyDown(inputManager.keyCode.SPACE) || 
            inputManager.getKeyDown(inputManager.keyCode.UP)) 
        {
            this.reset();
            this.gameObject.resumeGame();
        }
    }
    
    generateCactus(delta){
        this._timeGenerate += delta/1000;
        if (this._timeGenerate > this._rate) {
            this.listCactus.push(this.cactusPooler.getInstance());
            this._timeGenerate = 0;
            
        }   
    }
    gameOver() {
        let newHighScore = Math.max(this._score, this._highScore);
        this._highScore = newHighScore;
        this.gameObject.highScore.setNumber(this._highScore);
    }   

    disableAllObtacles() {
        this.cactusPooler.disableInstance(this.currentCactus);
        this.currentCactus = null;
        for (let obtacle of this.listCactus) {
            this.cactusPooler.disableInstance(obtacle);            
        }
        
        this.listCactus = [];
    }
}

class GameManager extends MyGameObject {
    constructor(pos = new Vec2(0,0), obj){
        super(pos);
        this.player = obj.player;
        this.ground = obj.ground;
        this.score = obj.score;
        this.highScore = obj.highScore;
        this.fps = obj.fps;
        this.gameOver = obj.gameOver;
        this.replay = obj.replay;

        
        this.gameManagerController = new GameManagerController(this);
        this.gameCore.gameManagerScript = this.gameManagerController;

        this.startTime = window.performance.now();
        this.playGame();
    }

    playGame() {
        this.startTime = window.performance.now();
        this.gameOver.setActive(false);
        this.replay.setActive(false);
    }
    pauseGame(){
        super.pauseGame();
        this.gameOver.setActive(true);
        this.replay.setActive(true);
    }
    resumeGame(){
        super.resumeGame();
        this.playGame();
    }
}

export default GameManager