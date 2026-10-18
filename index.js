let changeColorButton
let resetColorButton
let keyPressDisplay
let textInput
let textInputDisplay

function changeBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(100, 150, 200)'
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

function displayKeyPress(event) {
  keyPressDisplay.textContent = `Key pressed: ${event.key}`
}

function displayUserInput() {
  textInputDisplay.textContent = `You typed: ${textInput.value}`
}

function setupEventListeners() {
  changeColorButton = document.getElementById('changeColorButton')
  resetColorButton = document.getElementById('resetColorButton')
  keyPressDisplay = document.getElementById('keyPressDisplay')
  textInput = document.getElementById('textInput')
  textInputDisplay = document.getElementById('textInputDisplay')

  changeColorButton.addEventListener('click', changeBackgroundColor)
  resetColorButton.addEventListener('dblclick', resetBackgroundColor)
  document.addEventListener('keydown', displayKeyPress)
  textInput.addEventListener('input', displayUserInput)
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

if (typeof module !== 'undefined') {
  module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
  }
}
