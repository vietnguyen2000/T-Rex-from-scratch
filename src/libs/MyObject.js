import gameCore from '../core/GameCore.js';
class MyObject {
    constructor() {
        this.enabled = true;
        this.gameCore = gameCore;
        this.canvas = this.gameCore.canvas.canvas;
    }
    setActive(active){
        if (active && !this.enabled) {
            this.enabled = true;
            this.onEnable();
        }
        else if (!active && this.enabled) {
            this.enabled = false;
            this.onDisable();
        }
    }
    pauseGame(){
        this.gameCore.pause();
    }
    resumeGame(){
        this.gameCore.resume();
    }
    reset(){};
    onEnable(){};
    onDisable(){};
}

export default MyObject;