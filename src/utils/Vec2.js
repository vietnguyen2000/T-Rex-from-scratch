class Vec2{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static add(v1,v2){
        return new Vec2(v1.x+v2.x, v1.y+v2.y);
    }
    static sub(v1,v2){
        return this.add(v1,-v2);
    }
    static mul(v,prod){
        return new Vec2(v.x*prod,v.y*prod)
    }
}
export default Vec2;