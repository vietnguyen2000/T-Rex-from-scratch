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
        this._componentsRank = [];
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
                break;
        }
        
        // console.log(1000/delta)
    }
    pause(){
        this.status = statusENUM.PAUSE;
    }
    resume(){
        this.status = statusENUM.RUNNING;
    }
    render(){
        this.clearCanvas(this.canvas.canvas)
        for (let component of this.components) {
            
            if (component.enabled) component.render();
        }
    }
    clearCanvas(canvas){
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    addComponent(component, rank = 0){
        this.components.push(component);
        this._componentsRank.push(rank);
        let index = this.components.length-1;
        for (let i = this.components.length-2; i >= 0 ; i--) {
            if (this._componentsRank[i] <= rank){
                index = i+1;
                break;
                
            } 
            this._componentsRank[i+1] = this._componentsRank[i];
            this.components[i+1] = this.components[i];
        }
        this.components[index] = component;
        this._componentsRank[index] = rank;
    }


}
// let gameCore = new GameCore(960,540);
let instance = GameCore.getInstance();
export default instance;