import MyComponent from "../MyComponent";
import Position from "../../utils/Position.js";
class BoxCollider extends MyComponent {
    constructor(myGameObject, w, h) {
        super(myGameObject);
        this.width = w;
        this.height = h;
    }
    isTouch(col) {
        let center = Position.getPositionCenter(this.gameObject.position, this.width, this.height);
        let targetCenter = Position.getPositionCenter(col.gameObject.position, col.width, col.height);
        return (Math.abs(center.x-center.x) <= this.width/2 + col.width/2 && Math.abs(center.y-center.y) <= this.height/2 + col.height/2);
    }
}

export default BoxCollider