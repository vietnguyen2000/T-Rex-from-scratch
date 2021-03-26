import Vec2 from "Vec2.js";

class Position{
    static getPositionBottom(pos, w, h){
        return new Vec2(pos.x + w/2, pos.y + h);
    }
    static getPositionCenter(pos,w,h){
        return new Vec2(pos.x + w/2, pos.y + h/2);
    }
}