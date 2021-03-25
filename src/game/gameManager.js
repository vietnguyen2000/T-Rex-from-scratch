import  Canvas from '../canvas/MyCanvas.js';
import InputManager from '../input/InputManager.js';
class GameManager{
    static instance = null;
    getInstance(){
        if (GameManager.instance == null){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance
    }

    constructor(h,w){
        if(GameManager.instance) return GameManager.instance
        this.canvas = new Canvas(h,w)
        this.components = [];
        this.inputManager = new InputManager()
        
        this._lastFrameInput = this.inputManager.default();

        GameManager.instance = this
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
        for (component of this.components){
            component.update(time, delta);
        }
    }
    render(){
        for (component of this.components){
            component.render();
        }
    }
    addComponent(component){
        this.components.push(component);
    }

}

// let gameManager = new GameManager(960,540);

export default GameManager;