import React, { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('')
  const [operand, setOperand] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)
  const [runningTotal, setRunningTotal] = useState(0)

  const numberButtonPressed = digit => {
    setDisplay(prevValue => {
      return prevValue + digit.toString()
    })
  }

  const operandButtonPressed = op => {
    setOperand(op)
    setFirstNumber(display)
    setDisplay('')
    calculateResult()
  }

  const calculateResult = () => {
    let total = 0
    switch (operand) {
      case '+':
        total = parseInt(firstNumber) + parseInt(display)
        break
      case '-':
        total = parseInt(firstNumber) - parseInt(display)
        break
      case '*':
        total = parseInt(firstNumber) * parseInt(display)
        break
      case '/':
        total = parseInt(firstNumber) / parseInt(display)
        break
    }
    setDisplay(total)
    setRunningTotal(total)
  }

  const clear = () => {
    setOperand('')
    setFirstNumber(0)
    setDisplay('')
  }

  return (
    <>
      <div>
        <section>
          <p className="output">{display}</p>
        </section>
        <section>
          <button className="gray" disabled="true"></button>
          <button className="gray" disabled="true"></button>
          <button className="gray" disabled="true"></button>
          <button className="orange" onClick={() => operandButtonPressed('/')}>
            ÷
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => numberButtonPressed(7)}>
            7
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(8)}>
            8
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(9)}>
            9
          </button>
          <button className="orange" onClick={() => operandButtonPressed('*')}>
            x
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => numberButtonPressed(6)}>
            6
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(5)}>
            5
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(4)}>
            4
          </button>
          <button className="orange" onClick={() => operandButtonPressed('+')}>
            +
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => numberButtonPressed(3)}>
            3
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(2)}>
            2
          </button>
          <button className="darkgray" onClick={() => numberButtonPressed(1)}>
            1
          </button>
          <button className="orange" onClick={() => operandButtonPressed('-')}>
            -
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => numberButtonPressed(0)}>
            0
          </button>
          <button className="darkgray">.</button>
          <button className="darkgray" onClick={() => clear()}>
            AC
          </button>
          <button className="orange" onClick={() => calculateResult()}>
            =
          </button>
        </section>
      </div>
    </>
  )
}

export default Calculator
