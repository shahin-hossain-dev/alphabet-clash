function play() {
    hideElementById('final-score-field')
    hideElementById('start-play');
    showElementById('play-field');

    const element = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = element.split('');

    const randNumber = Math.round(Math.random() * 25);
    const randAlphabet = alphabet[randNumber];

    setInnerTextById('field-alphabet', randAlphabet);

    const allKeys = document.getElementsByClassName('kbd');

    for (const key of allKeys) {

        if (key.innerText === randAlphabet) {
            key.classList.add('bg-orange-400');
        }
        else {
            key.classList.remove('bg-orange-400');
        }
    }
}

document.addEventListener('keyup', continueGame);

function continueGame(e) {

    const element = document.getElementById('field-alphabet').innerText;
    if (e.key === element.toLowerCase()) {
        play();
        scoreIncrease();
    }
    else if (e.key === 'Escape') {
        gameOver();
    }
    else if (e.key === 'Enter') {
        play();
    }
    else {
        lostLife('life');

    }

}

function gameOver() {
    hideElementById('play-field')
    showElementById('final-score-field');

    const finalScore = getTextElementValueById('score');
    setInnerTextById('final-score', finalScore)
    setInnerTextById('life', 5);
    setInnerTextById('score', 0)
}

function lostLife(elementId) {
    const element = parseInt(document.getElementById(elementId).innerText);
    const updatedLife = element - 1;
    setInnerTextById(elementId, updatedLife);
    if (updatedLife <= 0) {
        gameOver();
    }
}

function scoreIncrease() {
    const elementValue = getTextElementValueById('score');
    const newValue = elementValue + 1;
    setInnerTextById('score', newValue);
}
