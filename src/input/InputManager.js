
class InputManager{
    
    static instance = null;
    static getInstance(){
        if (InputManager.instance) return InputManager.instance;
        return new InputManager();
    }
    constructor(){ 
        if (InputManager.instance) return InputManager.instance;
        this.eventKeyboard = {
            keyDown: {},
            keyUp: {},
            keyPress: {}
        };
        this.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
        

        InputManager.instance = this;
    }
    start(){
        document.addEventListener("keydown",this._onKeyDown(this));
        document.addEventListener("keyup",this._onKeyUp(this));
    }

    getKeyDown(keyCode){
        if (this.eventKeyboard.keyDown[keyCode] == 1){            
            return true;
        } 
        return false
    }
    

    getKeyUp(keyCode){
        if (this.eventKeyboard.keyUp[keyCode] == 1) return true;
        return false
    }

    getKeyPress(keyCode){
        if (this.eventKeyboard.keyPress[keyCode] == 1) return true;
        return false
    }

    clear(){
        this.eventKeyboard = {
            keyDown: {},
            keyUp: {},
            keyPress: {}
        }
    }

    default(){
        return {
            keyDown: {},
            keyUp: {},
            keyPress: {}
        }
    }

    _onKeyDown(obj){
        return (event) =>{
            if (!obj.getKeyPress(event.keyCode)){
                obj.eventKeyboard.keyDown[event.keyCode] = 1
                obj.eventKeyboard.keyPress[event.keyCode] = 1
            }
        }
    }
    _onKeyUp(obj){
        return (event) =>{
            this.eventKeyboard.keyUp[event.keyCode] = 1
            delete this.eventKeyboard.keyPress[event.keyCode]
        }
    }

}
let inputManager = new InputManager();
export default inputManager;