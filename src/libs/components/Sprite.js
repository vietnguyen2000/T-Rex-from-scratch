import MyComponent from '../MyComponent.js';
import Vec2 from '../../utils/Vec2.js';
import Position from '../../utils/Position.js';
class Sprite extends MyComponent{
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
}

export default Sprite;