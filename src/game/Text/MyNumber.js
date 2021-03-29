import MyGameObject from "../../libs/MyGameObject.js";
import Vec2 from "../../utils/Vec2.js";
import Digit from "./Digit.js"
const WIDTH_OF_DIGIT = 11
class MyNumber extends MyGameObject {
    constructor(pos, length = 5) {
        super(pos); 
        this.length = length;
        this.lstDigit = []
        
        let startX = pos.x - length*WIDTH_OF_DIGIT/2
        for (let i = 0; i < length; i++) {
            this.lstDigit.push(new Digit(new Vec2(startX+i*WIDTH_OF_DIGIT,pos.y),0))
        }
        this.num = 0;
        this.formattedNumber = this.makeStringFromNumber(this.num)
    }
    makeStringFromNumber(num) {
        return num.toLocaleString('en-US',{
            minimumIntegerDigits: this.length,
            useGrouping: false
        })
    }
    setNumber(num) {
        this.num = num;
        this.formattedNumber = this.makeStringFromNumber(this.num);
        for(let i = 0; i < this.length; i++) {
            this.lstDigit[i].setDigit(this.formattedNumber[i])
        }
    }
}



export default MyNumber