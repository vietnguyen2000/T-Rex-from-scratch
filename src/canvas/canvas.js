class MyCanvas {
    constructor(h,w, fillStyle = '#00'){
        this.canvas = document.createElement("canvas"),
        this.canvas.width = w;
        this.canvas.height = h;
        let context = this.canvas.getContext('2d');
        context.fillStyle = fillStyle;
    }
}

export default MyCanvas;