import GameManager from './gameManager.js';

var gameManager = new GameManager(540,960);

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