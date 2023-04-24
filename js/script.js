const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score')
const bestScore = document.querySelector('.best__score')
const sky = document.querySelector('.clouds')
const sky_1 = document.querySelector('.clouds_1')
const floor = document.querySelector('.floor' )
const floor_1 = document.querySelector('.floor_1')

var gameover = false

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 750);
}

const loop = setInterval(() =>{
    const skyPosition = sky.getBoundingClientRect().left;
    const sky_1Position = sky_1.getBoundingClientRect().left;
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if (pipePosition <= 100 && pipePosition >= 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left= `${pipePosition}px`;

   

        sky.style.transform= `translate(${skyPosition})`;
        sky.style.animation = 'none';
       


        sky_1.style.transform= `translate(${sky_1Position})`;
        sky_1.style.animation = 'none';
        

        console.log(skyPosition,sky_1Position)
        
    }

},10)

let intervalScore = null
var playerScore = 0
let bestPoints = 0
let velocityEnemy = 2

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


document.addEventListener('keyup',jump);