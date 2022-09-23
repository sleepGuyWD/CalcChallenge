let keys = document.querySelector('#container2')
let displayEqua = document.querySelector('#displayEquation')
let display1 = document.querySelector('h2')

keys.addEventListener('click', event => {
  if(!event.target.closest('div')) return
  
  const key = event.target
  const keyValue = key.textContent
  const displayValue = displayEqua.textContent

  if (displayValue == '0') {
    displayEqua.textContent = keyValue
  } else {
    displayEqua.textContent = displayValue + keyValue
  }
})





// document.querySelector('#eight').addEventListener('click', getEight)
// document.querySelector('#nine').addEventListener('click', getNine)
// document.querySelector('#four').addEventListener('click', getFour)
// document.querySelector('#five').addEventListener('click', getFive)
// document.querySelector('#six').addEventListener('click', getSix)
// document.querySelector('#one').addEventListener('click', getOne)
// document.querySelector('#two').addEventListener('click', getTwo)
// document.querySelector('#three').addEventListener('click', getThree)
// document.querySelector('#zero').addEventListener('click', getZero)
// document.querySelector('#decimal').addEventListener('click', getDecimal)



// function getEight() {
//   let firstKey = 8
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getNine() {
//   let firstKey = 9
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getFour() {
//   let firstKey = 4
//   document.querySelector('#displayEquation').innerText = firstKey
// }
// firstKey
// function getFive() {
//   let firstKey = 5
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getSix() {
//   let firstKey = 6
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getOne() {
//   let firstKey = 1
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getTwo() {
//   let firstKey = 2
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getThree() {
//   let firstKey = 3
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getZero() {
//   let firstKey = 0
//   document.querySelector('#displayEquation').innerText = firstKey
// }

// function getDecimal() {
//   let firstKey = '.'
//   document.querySelector('#displayEquation').innerText = firstKey
// }




// let display = document.querySelector('#displayEquation').innerText.value


// document.querySelector('.key').addEventListener('click', getDisplay)

// function getDisplay() {
//   let keyEntry = document.querySelector('.key').innerText.value

//   document.querySelector('#displayEquation').innerText = keyEntry
//   console.log(keyEntry)
// }

// if (keyEntry >= 0) {
//   keyEntry2 = keyEntry + "";
// } else {

// }