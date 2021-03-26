class SpriteAnimator extends MyComponent {
    constructor(myGameObject) {
        super(myGameObject);
        this.animations = {};
        this.animationPlaying = null;
    }
    addAnimation(name, animation){
        this.animations[name] = animation;
    }
    play(name){
        this.animations[this.animationPlaying].stop();
        this.animations[name].play();
        this.animationPlaying = name;
    }
}