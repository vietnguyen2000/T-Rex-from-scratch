
import InputManager from '../input/inputManager.js';
import MyObject from './MyObject.js';
import Vec2 from '../utils/Vec2.js';

class MyComponent extends MyObject{
    constructor(MyGameObject){
        super();
        this.gameObject = MyGameObject;
        this.gameObject.addComponent(this)
        this.gameManager.components.push(this);
        
    }
}


export default MyComponent;