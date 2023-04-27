const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score')
const bestScore = document.querySelector('.best__score')
const sky = document.querySelector('.clouds')
const sky_2 = document.querySelector('.clouds_1')
const floor = document.querySelector('.floor' )
const floor_2 = document.querySelector('.floor_1')
const restart = document.querySelector('.game-over__restart')
const btnMenu = document.querySelector('.game-over__menu')
const btnStart = document.querySelector('.main-menu__start')
const btnRestart = document.querySelector('.game-over_btn')


var gameover = false
var initialPositionSky = 0;
let intervalScore = null
var playerScore = 0
let bestPoints = 0
let velocityEnemy = 2

function start_game(){
  this.toggle_screen('start_screen', false)
  this.toggle_screen('game_screen', true)
  const loop = setInterval(() =>{
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  
    const skyPositionList = sky.getClientRects();
    const skyPosition = skyPositionList[0].left;
    
    const skyPositionList_2 = sky_2.getClientRects();
    const skyPosition_2 = skyPositionList_2 [0].left;
    
    const floorPositionList = floor.getClientRects();
    const floorPosition = floorPositionList[0].left;
    
    const floorPositionList_2 = floor_2.getClientRects();
    const floorPosition_2 = floorPositionList_2 [0].left;

    if (initialPositionSky === 0) {
        initialPositionSky = skyPositionList[0].left;
    }
   
    if (pipePosition <= 100 && pipePosition >= 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

        sky.style.animation = 'none';
        sky.style.left= `${skyPosition - initialPositionSky}px`;
      
        sky_2.style.animation = 'none';
        sky_2.style.left= `${skyPosition_2 - initialPositionSky}px`;

        floor.style.animation = 'none';
        floor.style.left= `${floorPosition - initialPositionSky}px`;
      
        floor_2.style.animation = 'none';
        floor_2.style.left= `${floorPosition_2 - initialPositionSky}px`;


        mario.style.animation = 'none';
        mario.style.bottom= `${marioPosition}px`;
        mario.src = './images/dead_mario.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '30px';

        clearInterval(loop);
        gameover = true;
    }    

    if (gameover === true){


    }
},10)

const scoreCounter = () => {
  if (!gameover) {
    playerScore = parseInt(playerScore + 20 / Math.pow(velocityEnemy, -1))
    score.innerHTML = `Score: ${playerScore}`
    pipe.style.animation =
      'pipe-animation ' + `${velocityEnemy}` + 's infinite linear'

    if (velocityEnemy >= 1) {
      velocityEnemy -= 0.0005
    }

    // Atualiza a melhor pontuação
    if (playerScore > bestPoints) {
      bestPoints = playerScore
      bestScore.innerHTML = `Best Score: ${bestPoints}`
    }
  }
}

intervalScore = setInterval(scoreCounter, 100)

}

function toggle_screen(id, toggle){
    let start = document.getElementById(id);
    let display = (toggle) ? 'flex' : 'none';
    start.style.display = display;
}

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 750);
}



document.addEventListener('keyup',jump);