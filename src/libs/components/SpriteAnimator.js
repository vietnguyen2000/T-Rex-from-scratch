import MyComponent from '../MyComponent.js'
class SpriteAnimator extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this.animations = {};
        this.animationPlaying = null;
        this.animationNamePlaying = null;
        this.sprite = this.gameObject.getComponent('Sprite');

        this._frameIndex = 0;
        this.keyFrame = [];
    }
    addAnimation(name, animation){
        this.animations[name] = animation;
        this.gameObject.addComponent(animation);
    }
    play(name){
        if (name != this.animationNamePlaying){
            this._frameIndex = 0;
            this.animationPlaying = this.animations[name];
            this.animationNamePlaying = name;
            this.keyFrame = this.animationPlaying.keyFrame;
        }
        
    }
    render(time, delta){
        this._frameIndex+=1;
        let index = Math.floor(this._frameIndex/this.animationPlaying.step)%(this.keyFrame.length*this.animationPlaying.step);
        this.sprite.setSprite(this.keyFrame[index%this.keyFrame.length]);
    }
}

export default SpriteAnimator;