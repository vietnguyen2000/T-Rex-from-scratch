import InputManager from '../input/inputManager.js';
import MyObject from './MyObject.js';
import Vec2 from '../utils/Vec2.js';

class MyComponent extends MyObject{
    constructor(MyGameObject, rank = 0 ){
        super();
        this.gameObject = MyGameObject;
        this.gameObject.addComponent(this);
        this.gameCore.addComponent(this,rank);
        
    }
    update(time,delta){}
    pause(time, delta){}
    render(){
        
    }
}


export default MyComponent;