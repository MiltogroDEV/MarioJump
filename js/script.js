const gameBoard = document.querySelector('.game-board');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe1');
const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');
const background = document.querySelector('.game-board');
const chao = document.querySelector('.chao');
const botao = document.querySelector('.botao');
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');

let valorScore = 0;
let maiorScore = 0;

let pipeVel = '1.5s';

let loop;

function startGame() {
    valorScore = 0;
    score.textContent = valorScore;
    
    pipe.style.animation = `pipe1 ${pipeVel} infinite linear`;
    pipe.style.left = '';
    mario.style.animation = '';
    mario.style.bottom = '';
    mario.style.rotate = '';
    mario.src = '/img/personagemMaior.gif';
    
    nuvem1.style.animation = '';
    nuvem1.style.right = '';
    nuvem2.style.animation = '';
    nuvem2.style.right = '';
    
    botao.style.opacity = '0';
    botao.style.cursor = 'auto';
    
    clearInterval(loop);
    loop = setInterval(gameLoop, 10);
}

function gameLoop() {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvem1Position = +window.getComputedStyle(nuvem1).right.replace('px', '');
    const nuvem2Position = +window.getComputedStyle(nuvem2).right.replace('px', '');
    const chaoPosition = +window.getComputedStyle(chao).right.replace('px', '');
    
    valorScore += 1;
    score.textContent = valorScore;

    if (valorScore > maiorScore){
        maiorScore = valorScore;
        highScore.textContent = maiorScore;
    }

    if (valorScore > 500){
        background.style.background = 'linear-gradient(rgb(236, 92, 99), rgb(247, 170, 170));'
    }
    
    if (pipePosition <= 200 && pipePosition > 0 && marioPosition < 100){
        gameOver(pipePosition, marioPosition, nuvem1Position, nuvem2Position, chaoPosition);
    }
}

function gameOver(pipePosition, marioPosition, nuvem1Position, nuvem2Position, chaoPosition) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition - 30}px`
    mario.style.rotate = '-90deg';
    mario.src = '/img/personagemMaiorGameOver1.png';
    
    nuvem1.style.animation = 'none';
    nuvem1.style.right = `${nuvem1Position}px`;
    nuvem2.style.animation = 'none';
    nuvem2.style.right = `${nuvem2Position}px`;
    
    botao.style.opacity = '1';
    botao.style.cursor = 'pointer';
    
    console.log(maiorScore);
    console.log(valorScore);
    
    clearInterval(loop);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        startGame();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'w' || event.key === 'ArrowUp') {
        event.preventDefault();
        mario.classList.add('pular');
        setTimeout(() => {
            mario.classList.remove('pular');
        }, 500);
    }
});

botao.addEventListener('click', function(event) {
    event.preventDefault();
    startGame();
});


startGame();