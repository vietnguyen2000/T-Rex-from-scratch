import gameCore from './GameCore.js';
// var gameCore = new GameCore(150,600);

gameCore.start(150,600);

requestAnimationFrame(loop);

let lastTime = window.performance.now();
function loop(){
    let time = window.performance.now();
    let delta = time-lastTime;

    gameCore.progressInput();
    gameCore.update(time, delta);
    gameCore.render();

    lastTime = time;
    requestAnimationFrame(loop);
}