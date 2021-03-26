import Canvas from '../canvas/MyCanvas.js';
import InputManager from '../input/InputManager.js';
import Scene from '../game/Scene/Scene.js';
class GameManager{
    static instance;
    static getInstance(){
        if (GameManager.instance == null){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    constructor(){
        if(GameManager.instance != null) {
            return GameManager.instance
        }
        this.canvas = new Canvas()
        this.components = [];
        this.inputManager = InputManager;
        
        this._lastFrameInput = this.inputManager.default();
        GameManager.instance = this;
    }
    start(h=150, w=600){
        this.canvas.start(h,w);
        this.scene = new Scene();
    }
    progressInput(){
        //remove loop key down (up) of basic event system
        for (let key in this._lastFrameInput.keyDown){

            if (this._lastFrameInput.keyDown[key] == 1){
                delete this.inputManager.eventKeyboard.keyDown[key]
            }
        }
        for (let key in this._lastFrameInput.keyUp){
            if (this._lastFrameInput.keyDown[key] == 1){
                delete this.inputManager.eventKeyboard.keyUp[key]
            }
        }
        this._lastFrameInput = JSON.parse(JSON.stringify(this.inputManager.eventKeyboard))
    }
    update(time, delta){
        for (let component of this.components){
            component.update(time, delta);
        }
    }
    render(){
        this.clearCanvas(this.canvas.canvas)
        for (let component of this.components){
            component.render();
        }
    }
    clearCanvas(canvas){
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    addComponent(component){
        this.components.push(component);
    }

}

// let gameManager = new GameManager(960,540);
let instance = GameManager.getInstance();
export default instance;