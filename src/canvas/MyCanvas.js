class MyCanvas {
    constructor(){
        this.canvas = document.createElement("canvas");
        this.canvas.id = 'canvas';
    }
    start(h=150,w=600){
        this.canvas.width = w;
        this.canvas.height = h;
        document.body.insertBefore(this.canvas, document.body.childNodes[2])
        return this.canvas;
    }
}

export default MyCanvas;