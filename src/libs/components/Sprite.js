import MyComponent from '../MyComponent.js';
import Vec2 from '../../utils/Vec2.js';
import Position from '../../utils/Position.js';
class Sprite extends MyComponent{
    constructor(myGameObject, rank) {
        super(myGameObject, rank);
        this.image = null;
        this.imageData = {};
    }
    setSprite(img){
        this.image = img;
    }
    render(){
        let context = this.canvas.getContext('2d');
        
        let pos = this.gameObject.position;
        context.drawImage(this.image, pos.x - this.image.width/2, pos.y - this.image.height);
        
    }

    getCenter(){
        let bottom = this.gameObject.position;
        return new Vec2(bottom.x, bottom.y - this.image.height/2);
    }

    getPixel(x,y) {
        if (this.imageData[this.image.src]) return this.imageData[this.image.src].getImageData(x, y, 1, 1).data;

        let canvas = document.createElement('canvas');
        canvas.hidden = true;
        let context = canvas.getContext('2d');
        context.drawImage(this.image, 0, 0);
        this.imageData[this.image.src] = context;
        return context.getImageData(x, y, 1, 1).data;
    }
}

export default Sprite;