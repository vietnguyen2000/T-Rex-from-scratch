import MyComponent from '../MyComponent.js';
import Vec2 from '../../utils/Vec2.js';
class Sprite extends MyComponent{
    setSprite(img){
        this.image = img;
    }
    render(){
        let context = this.canvas.getContext('2d');
        context.drawImage(this.image, this.gameObject.position.x-this.image.width/2, this.gameObject.position.y-this.image.height);
    }
}

export default Sprite;