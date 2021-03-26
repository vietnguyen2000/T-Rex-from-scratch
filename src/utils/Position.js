import Vec2 from "./Vec2.js";

class Position{
    static getPositionBottom(pos, w, h) {
        return new Vec2(pos.x + w/2, pos.y + h);
    }
    static getPositionCenter(pos,w,h) {
        return new Vec2(pos.x + w/2, pos.y + h/2);
    }
    static toCanvasPosition(canvans, x, y) {
        return new Vec2(canvas.width/2+x, canvas.height/2 - y);
    }
    static toNormalPosition(canvas, x, y){
        return new Vec2(x - canvas.width/2, canvas.height/2-y);
    }
    static distance(v1,v2){
        return Math.sqrt((v1.x-v2.x)**2 + (v1.y - v2.y)**2);
    }
}

export default Position;