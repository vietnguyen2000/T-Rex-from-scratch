import Canvas from '../canvas/MyCanvas.js';
import inputManager from '../input/InputManager.js';
import Scene from '../game/Scene/Scene.js';

const statusENUM = {
    RUNNING: 'running',
    PAUSE: 'pause',
}
class GameCore{
    static instance;
    static getInstance(){
        if (GameCore.instance == null){
            GameCore.instance = new GameCore();
        }
        return GameCore.instance;
    }

    constructor(){
        if(GameCore.instance != null) {
            return GameCore.instance
        }
        this.canvas = new Canvas()
        this.components = [];
        this.inputManager = inputManager;
        
        this._lastFrameInput = this.inputManager.default();
        this.status = statusENUM.RUNNING;

        GameCore.instance = this;
    }
    start(h=150, w=600){
        this.canvas.start(h,w);
        this.scene = new Scene();
        this.inputManager.start();
    }
    progressInput(){
        //remove loop key down (up) of basic event system
        for (let key in this._lastFrameInput.keyDown){

            if (this._lastFrameInput.keyDown[key] == 1){
                delete this.inputManager.eventKeyboard.keyDown[key]
            }
        }
        for (let key in this._lastFrameInput.keyUp){
            if (this._lastFrameInput.keyUp[key] == 1){
                delete this.inputManager.eventKeyboard.keyUp[key]
            }
        }
        this._lastFrameInput = JSON.parse(JSON.stringify(this.inputManager.eventKeyboard))
    }
    update(time, delta){
        switch (this.status){
            case statusENUM.RUNNING:
                for (let component of this.components){
                    if (component.enabled) component.update(time, delta);
                }
                break;
            case statusENUM.PAUSE:
                for (let component of this.components){
                    if (component.enabled) component.pause(time, delta);
                }
        }
        
        // console.log(1000/delta)
    }
    pause(){
        this.status = 'pause';
    }
    resume(){
        this.status = 'resume';
    }
    render(){
        this.clearCanvas(this.canvas.canvas)
        for (let component of this.components){
            if (component.enabled) component.render();
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

// let gameCore = new GameCore(960,540);
let instance = GameCore.getInstance();
export default instance;