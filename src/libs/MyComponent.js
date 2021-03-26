import gameManager from '../core/GameManager.js';
import InputManager from '../input/inputManager.js';
import MyObject from './MyObject.js';
import Vec2 from '../utils/Vec2.js';

class MyComponent extends MyObject{
    constructor(MyGameObject){
        super();
        this.gameObject = MyGameObject;
        this.gameObject.components.push(this);
        this.gameManager = gameManager;
        this.gameManager.components.push(this);
        this.canvas = this.gameManager.canvas.canvas;
    }
}


export default MyComponent;