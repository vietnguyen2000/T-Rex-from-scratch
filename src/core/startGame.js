import gameManager from './GameManager.js';

// var gameManager = new GameManager(150,600);

gameManager.start(150,600);
requestAnimationFrame(loop);

let lastTime = window.performance.now();
function loop(){
    let time = window.performance.now();
    let delta = time-lastTime;

    gameManager.progressInput();
    gameManager.update(time, delta);
    gameManager.render();

    lastTime = time;
    requestAnimationFrame(loop);
}