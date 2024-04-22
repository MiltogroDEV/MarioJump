const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');
const chao = document.querySelector('.chao');
const botao = document.querySelector('.botao');
const gameBoard = document.querySelector('.game-board');

const score = document.getElementById('score');
valorScore = 0;


// Para evitar o scroll quando teclar SPACE
window.onkeydown = function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
};
/*----------------------------------------*/

const pular = () => {
    mario.classList.add('pular');
    
    setTimeout(() => {
        mario.classList.remove('pular');
    }, 500);
}

const loop = setInterval(() => {

    botao.style.opacity = '0';
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvem1Position = +window.getComputedStyle(nuvem1).right.replace('px', '');
    const nuvem2Position = +window.getComputedStyle(nuvem2).right.replace('px', '');
    const chaoPosition = +window.getComputedStyle(nuvem2).right.replace('px', '');

    valorScore += 1

    score.textContent = valorScore;

    // if (valorScore > 100) {
    //     pipe.style.animation = 'pipe 1.4s infinite linear'

    //     gameBoard.style.animation = 'cor 0.5s linear'
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

        console.log(valorScore);

        clearInterval(loop);

        // Tecla enter pra reiniciar
        document.addEventListener('keydown', function(check) {
            if (check.key == 'Enter') {
                this.location.reload();
            }
        })
        /*----------------------------------------*/


    }

}, 10);

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