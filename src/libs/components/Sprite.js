import MyComponent from '../MyComponent.js';
import Vec2 from '../../utils/Vec2.js';
class Sprite extends MyComponent{
    setSprite(img){
        this.image = img;
    }
    render(){
        let context = this.canvas.getContext('2d');
        context.drawImage(this.image, this.gameObject.position.x, this.gameObject.position.y);
    }
}

export default Sprite;