const holes = document.getElementById('holes')
const winScore = document.getElementById('dead')
const loseScore = document.getElementById('lost')
let correct = 0
let wrong = 0
const holesPressed = event => {  
    if (event.target.className == 'hole hole_has-mole') correct ++
    else wrong ++
    if (correct == 10) {
        alert ('Вы победили!')
        // [correct, wrong] = [0, 0] Почему-то не работает, подскажите, пожалуйста
        correct = 0
        wrong = 0

    }
    if (wrong == 5) {
        alert('Вы проиграли!')
        // [correct, wrong] = [0, 0] Почему-то не работает, подскажите, пожалуйста
        correct = 0
        wrong = 0
    }
    winScore.textContent = correct    
    loseScore.textContent = wrong

}
holes.addEventListener("click", holesPressed)