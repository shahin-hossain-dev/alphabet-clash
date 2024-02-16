function play() {
    hideElementById('start-play');
    showElementById('play-field');

    const element = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = element.split('');

    const randNumber = Math.round(Math.random() * alphabet.length - 1);
    const randAlphabet = alphabet[randNumber];

    setInnerTextById('field-alphabet', randAlphabet);

    const allKeys = document.getElementsByClassName('kbd');

    for (const key of allKeys) {
        if (key.innerText === randAlphabet) {
            key.classList.add('bg-orange-400');
        }
    }

}

document.addEventListener('keyup', continueGame);

function continueGame(e) {
    const element = document.getElementById('field-alphabet').innerText;
    console.log(e)
    if (e.key === element.toLowerCase()) {
        play();
    }

}




function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value;
}

function hideElementById(elementId) {
    const startPlay = document.getElementById(elementId);
    startPlay.classList.add('hidden');
}

function showElementById(elementId) {
    const playField = document.getElementById(elementId);
    playField.classList.remove('hidden');
}