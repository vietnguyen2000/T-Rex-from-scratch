import GameCore from '../core/GameCore.js';
import InputManager from '../input/inputManager.js';
import MyObject from './MyObject.js';
import Vec2 from '../utils/Vec2.js';
import Position from '../utils/Position.js';
class MyGameObject extends MyObject {
    constructor(pos = new Vec2(0,0)) {
        super();
        this.defaultPosition = pos;
        this.components = {};
        this.position = Position.toCanvasPosition(this.canvas,pos.x,pos.y); // this is bottom position
        this.gameCore = GameCore;
        
    }
    reset() {
        super.reset();
        this.position = Position.toCanvasPosition(this.canvas,this.defaultPosition.x, this.defaultPosition.y);
    }
    setActive(active) {
        if (active && !this.enabled) {
            for (let key in this.components) {
                this.components[key].setActive(active);
            }
            this.enabled = true;
            this.onEnable();
        }
        else if (!active && this.enabled) {
            for (let key in this.components) {
                this.components[key].setActive(active);
            }
            this.enabled = false;
            this.onDisable();
        }
    }
    setPosition(pos) {
        this.position = Position.toCanvasPosition(this.canvas,pos.x,pos.y);    
    }

    getPosition() {
        return Position.toNormalPosition(this.canvas, this.position.x, this.position.y)
    }
    addComponent(component) {
        this.components[component.constructor.name] = component;
    }

    getComponent(name) {
        return this.components[name] 
    }

    
}

export default MyGameObject;