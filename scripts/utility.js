
function getTextElementValueById(elementId) {
    const element = parseInt(document.getElementById(elementId).innerText);
    return element;
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