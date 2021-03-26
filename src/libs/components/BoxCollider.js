import MyComponent from "../MyComponent.js";
import Position from "../../utils/Position.js";
import Vec2 from "../../utils/Vec2.js";
class BoxCollider extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
    }
    getSize() {
        let sprite = this.gameObject.getComponent('Sprite');
        let w = sprite.image.width;
        let h = sprite.image.height;
        return new Vec2(w,h);
    }
    isTouch(col) {
        let sprite = this.gameObject.getComponent('Sprite');
        let w = sprite.image.width;
        let h = sprite.image.height;
        let center = Position.getPositionCenter(this.gameObject.position, w, h);
        let targetSize = col.getSize();
        let targetCenter = Position.getPositionCenter(col.gameObject.position, targetSize.x, targetSize.y);
        
        return (Math.abs(center.x-targetCenter.x) <= w/2 + w/2 && Math.abs(center.y-targetCenter.y) <= w/2 + w/2);
    }
}

export default BoxCollider