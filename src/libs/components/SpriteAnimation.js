import MyComponent from "../MyComponent.js";

class SpriteAnimation extends MyComponent {
    constructor(myGameObject, step) {
        super(myGameObject);
        this.step = step;
        this.keyFrame = [];
        this.sprite = this.gameObject.getComponent('Sprite');
        this._frameIndex = 0;
        this.playAnimation = false;
    }
    addKeyFrame(img) {
        this.keyFrame.push(img);
    }
    play() {
        this.playAnimation = true;
        this._frameIndex = 0;
    }
    stop() {
        this.playAnimation = false;
    }
    render() {
        if (this.playAnimation){
            this._frameIndex+=1;
            let index = Math.floor(this._frameIndex/this.step)%(this.keyFrame.length*this.step);
            this.sprite.setSprite(this.keyFrame[index%this.keyFrame.length]);
        }
        
        
    }
}

export default SpriteAnimation;