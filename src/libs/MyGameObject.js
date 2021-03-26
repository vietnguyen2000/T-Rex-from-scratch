import GameManager from '../core/GameManager.js';
import InputManager from '../input/inputManager.js';
import MyObject from './MyObject.js';
import Vec2 from '../utils/Vec2.js';

class MyGameObject extends MyObject{
    constructor(pos = new Vec2(0,0)){
        super();
        this.components = [];
        this.position = pos;
        this.gameManager = GameManager;
        
    }
    addComponent(component){
        this.components.push(component)
    }
}

export default MyGameObject;