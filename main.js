document.querySelector('#seven').addEventListener('click', getSeven)
document.querySelector('#eight').addEventListener('click', getEight)
document.querySelector('#nine').addEventListener('click', getNine)
document.querySelector('#four').addEventListener('click', getFour)
document.querySelector('#five').addEventListener('click', getFive)
document.querySelector('#six').addEventListener('click', getSix)
document.querySelector('#one').addEventListener('click', getOne)
document.querySelector('#two').addEventListener('click', getTwo)
document.querySelector('#three').addEventListener('click', getThree)
document.querySelector('#zero').addEventListener('click', getZero)
document.querySelector('#decimal').addEventListener('click', getDecimal)

function getSeven() {
  let seven = 7 
  document.querySelector('#displayEquation').innerText = seven
}

function getEight() {
  let eight = 8
  document.querySelector('#displayEquation').innerText = eight
}

function getNine() {
  let nine = 9
  document.querySelector('#displayEquation').innerText = nine
}

function getFour() {
  let four = 4
  document.querySelector('#displayEquation').innerText = four
}

function getFive() {
  let five = 5
  document.querySelector('#displayEquation').innerText = five
}

function getSix() {
  let six = 6
  document.querySelector('#displayEquation').innerText = six
}

function getOne() {
  let one = 1
  document.querySelector('#displayEquation').innerText = one
}

function getTwo() {
  let two = 2
  document.querySelector('#displayEquation').innerText = two
}

function getThree() {
  let three = 3
  document.querySelector('#displayEquation').innerText = three
}

function getZero() {
  let zero = 0
  document.querySelector('#displayEquation').innerText = zero
}

function getDecimal() {
  let decimal = '.'
  document.querySelector('#displayEquation').innerText = decimal
}