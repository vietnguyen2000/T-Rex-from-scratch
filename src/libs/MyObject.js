import gameManager from '../core/GameManager.js';
class MyObject{
    constructor(){
        this.enabled = true;
        this.gameManager = gameManager;
        this.canvas = this.gameManager.canvas.canvas;
    }
    update(time, delta){

    }
    render(){
        
    }
}

export default MyObject;