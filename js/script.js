const gameBoard = document.querySelector('.game-board');
const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe1');

const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');

const chao = document.querySelector('.chao');
const botao = document.querySelector('.botao');

const score = document.getElementById('score');

let valorScore = 0;

// let currentPipeSpeed = '1.5s';
// let animationFrameId;

// function setPipeAnimation(posicao, novaVel) {
//     pipe.style.animation = 'none';
//     pipe.style.right = `${posicao}px`;
//     requestAnimationFrame(() => {
//         pipe.className = '';
//         pipe.classList.add(novaVel === '1.5s' ? 'pipe1' : novaVel === '1.1s' ? 'pipe2' : 'pipe3');
//         setTimeout(() => {
//             pipe.style.animation = '';
//         }, 20);
//     });
// }

window.onkeydown = function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
}

const pular = () => {
    mario.classList.add('pular');

    setTimeout(() => {
        mario.classList.remove('pular');
    }, 500);
}

const loop = setInterval(() => {
    botao.style.opacity = '0';

    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);
    valorScore += 1;
    score.textContent = valorScore;

    // let novaVel;
    // if (valorScore > 3000) {
    //     novaVel = '0.6s';
    // } else if (valorScore > 1000) {
    //     novaVel = '1.1s';
    // } else {
    //     novaVel = '1.5s';
    // }

    // if (novaVel !== currentPipeSpeed) {
    //     currentPipeSpeed = novaVel;
    //     setPipeAnimation(pipePosition, novaVel);
    // }

    requestAnimationFrame(loop);

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

        clearInterval(loop);

        // Tecla enter pra reiniciar
        document.addEventListener('keydown', function(check) {
            if (check.key == 'Enter') {
                this.location.reload();
            }
        })
    }

}, 10);

requestAnimationFrame(loop);

document.addEventListener('keydown', function(check) {
    if (
        check.key === ' ' || 
        check.key === 'w' || 
        check.key === 'ArrowUp'
        //qualquer outra tecla de pular adicionar aqui
    ) {
        pular();
    }
});