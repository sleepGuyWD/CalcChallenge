const prevDisplayTextElement = document.querySelector('#output')
const currrentDisplayTextElement = document.querySelector('#displayEquation')

class Calculator  {
  constructor(prevDisplayTextElement, currrentDisplayTextElement) {
    this.prevDisplayTextElement = prevDisplayTextElement
    this.currrentDisplayTextElement = currrentDisplayTextElement
    this.clearAll()
  }

  parseInput(innerText) {
    switch (innerText) {
      case '=':
       this.compute(this.currentOperand)
        break
      case 'C':
        this.clearAll()
        break
      case '.':
        if(this.currentOperand == 0) {
          this.addText('0.')
         
        } else {
          this.addText(innerText)
        }
        break
      default: 
      this.addText(innerText)
    }
  }

  addText(innerText) {
    if (this.currentOperand === '0') {
      this.currentOperand = ''
    } else if (this.prevOperand != null) {
        this.currentOperand = this.prevOperand
        this.prevOperand = null
    }
    if (isNaN(+(innerText)) && isNaN(+(this.currentOperand))) {
      if (isNaN(this.currentOperand.slice(-1))) {
        return
      }
    }
     this.currentOperand += innerText
     document.querySelector('#output').innerText = ''
  }

  outputText(text) {
    document.querySelector('#output').innerText = text
  }

  clearAll() {
    this.currentOperand = '0'
    this.prevOperand = null
    document.querySelector('#output').innerText = ''
  }

  updateDisplay() {
    this.currrentDisplayTextElement.innerText = this.currentOperand
    
  }

  compute(equation) {
    let result = Function("return " + equation) ()
    this.outputText(result)
    this.currentOperand = ''
  }
}

const calculator = new Calculator(prevDisplayTextElement, currrentDisplayTextElement)

const keys = document.querySelector('#container2')
  keys.addEventListener('click', event => {
    const {target} = event
    const {innerText} = target
    if (!target.matches('.key')) {
      return
    } else {    
      calculator.parseInput(innerText)
      calculator.updateDisplay()
    }
  })