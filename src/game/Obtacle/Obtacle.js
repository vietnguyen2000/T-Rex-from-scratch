import BoxCollider from "../../libs/components/BoxCollider.js";
import Physic from "../../libs/components/Physic.js";
import Sprite from "../../libs/components/Sprite.js";
import MyGameObject from "../../libs/MyGameObject.js";
import Position from "../../utils/Position.js";
import Vec2 from "../../utils/Vec2.js";
import ObtacleController from "./ObtacleController.js";
class Obtacle extends MyGameObject {
    constructor(pos = new Vec2(300,-65)) {
        super(pos);

        this.player = this.gameCore.player;

        //sprite
        this.sprite = new Sprite(this);
        let image = new Image();
        this.sprite.setSprite(image);

        //Physics
        this.physic = new Physic(this, 0);

        //Collider
        this.collider = new BoxCollider(this);

        //Controller
        this.controller = new ObtacleController(this);
    }
    onEnable() {
        this.reset();
    }
}

export default Obtacle