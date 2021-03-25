class MyCanvas {
    constructor(h,w, fillStyle = '#12345678'){
        this.canvas = document.createElement("canvas");
        
        this.canvas.width = w;
        this.canvas.height = h;
        let context = this.canvas.getContext('2d');
        context.fillStyle = fillStyle;
        context.fillRect(0, 0, 150, 75);
        document.body.insertBefore(this.canvas, document.body.childNodes[2])
    }
}

export default MyCanvas;