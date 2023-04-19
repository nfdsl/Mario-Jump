const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() =>{

    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if (pipePosition <= 100 && marioPosition < 80) {
        pipe.style.animation = 'none';
        var pp = '' + (marioPosition); 
        console.log(pp);
        console.log(marioPosition);
        pipe.style.left= pp;
        
    }

},10)

document.addEventListener('keyup',jump);