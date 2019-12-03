import React, { useState } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('')
  const [operand, setOperand] = useState('')
  const [firstNumber, setFirstNumber] = useState(0)

  const clickNumberButton = digit => {
    setDisplay(prevValue => {
      return prevValue + digit.toString()
    })
  }

  const operandButtonPressed = op => {
    setOperand(op)
    setFirstNumber(display)
    setDisplay('')
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
  }

  const clear = () => {
    setDisplay('')
  }

  return (
    <>
      <div>
        <section className="input">
          <h1>{display}</h1>
        </section>
        <section>
          <button className="gray">💜</button>
          <button className="gray">+/-</button>
          <button className="gray">%</button>
          <button className="orange" onClick={() => operandButtonPressed('/')}>
            ÷
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickNumberButton(7)}>
            7
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(8)}>
            8
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(9)}>
            9
          </button>
          <button className="orange" onClick={() => operandButtonPressed('*')}>
            x
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickNumberButton(6)}>
            6
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(5)}>
            5
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(4)}>
            4
          </button>
          <button className="orange" onClick={() => operandButtonPressed('+')}>
            +
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickNumberButton(3)}>
            3
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(2)}>
            2
          </button>
          <button className="darkgray" onClick={() => clickNumberButton(1)}>
            1
          </button>
          <button className="orange" onClick={() => operandButtonPressed('-')}>
            -
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickNumberButton(0)}>
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
        <footer>Made with 💜 at SDG</footer>
      </div>
    </>
  )
}

export default Calculator
