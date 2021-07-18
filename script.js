const root = document.querySelector('.root');
const pedra = document.querySelector('.button--pedra');
const papel = document.querySelector('.button--papel');
const tesoura = document.querySelector('.button--tesoura');
const divGame = document.querySelector('.div__game');

let choice = '';
let choices = ['pedra',
               'papel', 
               'tesoura'
            ];


const randomChoice = () => {

    let number = Math.floor(Math.random(3) * 3);
    return choices[number];
}


pedra.addEventListener('click', function(e) {
    e.preventDefault();

    choice = randomChoice()

    if (choice === 'pedra') {
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Empate!';
        divGame.appendChild(span);
    }

    else if (choice === 'papel'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Perdeu!';
        divGame.appendChild(span);
    }

    else if (choice === 'tesoura'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Ganhou!';
        divGame.appendChild(span);
    }
});

papel.addEventListener('click', function(e) {
    e.preventDefault();

    choice = randomChoice()

    if (choice === 'pedra') {
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Ganhou!';
        divGame.appendChild(span);
    }

    else if (choice === 'papel'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Empate!';
        divGame.appendChild(span);
    }

    else if (choice === 'tesoura'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Perdeu!';
        divGame.appendChild(span);
    }
});

tesoura.addEventListener('click', function(e) {
    e.preventDefault();

    choice = randomChoice()

    if (choice === 'pedra') {
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Perdeu!';
        divGame.appendChild(span);
    }

    else if (choice === 'papel'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Você Ganhou!';
        divGame.appendChild(span);
    }

    else if (choice === 'tesoura'){
        const span = document.createElement('span');
        divGame.innerHTML = ''
        span.innerText = 'Empate!';
        divGame.appendChild(span);
    }
});
