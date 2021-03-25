import  Canvas from '../canvas/canvas.js';
const keyCode = {
    up: 0,
    down: 1,
}
class GameManager{
    constructor(h,w){
        this.canvas = new Canvas(h,w)
        this.components = [];
        // canvas.canvas.addEven
    }

    progressInput(){

    }
    update(time, delta){
        for (component of this.components){
            component.update(time, delta);
        }
        //console.log(time, delta); //Working fine now
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