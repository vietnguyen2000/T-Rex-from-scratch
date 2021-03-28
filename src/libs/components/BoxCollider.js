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
        let thisRect = this.getRect();
        let targetRect = col.getRect();
        
        return ((Math.abs(thisRect.center.x-targetRect.center.x) <= thisRect.width + targetRect.width) && 
        (Math.abs(thisRect.center.y-targetRect.center.y) <= thisRect.height + targetRect.height));
    }
    getRect(){
        let size = this.getSize()
        let center = this.gameObject.getComponent('Sprite').getCenter();
        size.x -= 5
        size.y -= 5
        return {
            center: center,
            width: size.x/2,
            height: size.y/2,
        }
    }
    // render for debug
    render(){
        let ctx = this.canvas.getContext('2d');
        ctx.strokeStyle = 'green';
        ctx.beginPath();
        let rect = this.getRect();
        ctx.rect(rect.center.x - rect.width, rect.center.y - rect.height , rect.width*2, rect.height*2);
        ctx.stroke();
    }
}

export default BoxCollider