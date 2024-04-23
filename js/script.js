const gameBoard = document.querySelector('.game-board');
const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe1');

const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');

const chao = document.querySelector('.chao');
const botao = document.querySelector('.botao');

const score = document.getElementById('score');

let valorScore = 0;
let maiorScore = 0;

let pipeVel = '1.5s';


// function setPipeAnimation(novaVel) {
//     pipe.classList.remove('pipe1', 'pipe2', 'pipe3');
//     pipe.classList.add(novaVel === '1.5s' ? 'pipe1' : novaVel === '1.1s' ? 'pipe2' : 'pipe3');
//     pipe.style.animationDuration = novaVel;
// }


const loop = setInterval(() => {
    botao.style.opacity = '0';
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvem1Position = +window.getComputedStyle(nuvem1).right.replace('px', '');
    const nuvem2Position = +window.getComputedStyle(nuvem2).right.replace('px', '');
    const chaoPosition = +window.getComputedStyle(nuvem2).right.replace('px', '');
    
    valorScore += 1;
    score.textContent = valorScore;
    
    
    // let novaVel;
    // if (valorScore > 400) {
    //     novaVel = '0.6s';
    // } else if (valorScore > 200) {
    //     novaVel = '1.1s';
    // } else {
    //     novaVel = '1.5s';
    // }

    // if (novaVel !== pipeVel) {
    //     pipeVel = novaVel;
    //     setPipeAnimation(novaVel);
    // }
    
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`
        mario.src = '/img/game-over.png';
        
        mario.style.width = '80px';
        mario.style.margin = '0 0 0 50px';
        
        nuvem1.style.animation = 'none';
        nuvem1.style.right = `${nuvem1Position}px`;
        nuvem2.style.animation = 'none';
        nuvem2.style.right = `${nuvem2Position}px`;
        
        chao.style.animation = 'none';
        chao.style.right = `${chaoPosition}px`;
        
        botao.style.opacity = '1';
        
        if (valorScore > maiorScore){
            maiorScore = valorScore;
        }

        document.addEventListener('keydown', function(check) {
            if (check.key == 'Enter') {
                this.location.reload();
            }
        })

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'w' || event.key === 'ArrowUp') {
        event.preventDefault();
        mario.classList.add('pular');
        setTimeout(() => {
            mario.classList.remove('pular');
        }, 500);
    }
});