import Sprite from "../../libs/components/Sprite.js";
import Vec2 from "../../utils/Vec2.js";
import Character from "./Character.js";
import MyNumber from "./MyNumber.js";
const WIDTH_OF_DIGIT = 12
class HighScore extends MyNumber {
    constructor(pos, length = 5) {
        super(pos, length);
        let p = new Vec2(pos.x-(length+5)*WIDTH_OF_DIGIT/2,pos.y);
        this.H = new Character(p, 'H');
        this.I = new Character(new Vec2(p.x+WIDTH_OF_DIGIT,p.y), 'I');
    }
}

export default HighScore