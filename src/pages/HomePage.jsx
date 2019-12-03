// DONE create button on page
// DONE assign numbers to each button
// DONE assign operator to math buttons
// DONE add math for / * + -
// DONE display result
// DONE clear result

import React, { useState } from 'react'

const HomePage = () => {
  const [userInput, setUserInput] = useState('')
  const [setOperand, setSetOperand] = useState('')
  // const [firstNumber, setFirstNumber] = useState('');

  const clickNumberButton = digit => {
    setUserInput(prevValue => {
      return prevValue + digit.toString()
    })
  }

  const operandButtonPressed = op => {
    setOperand(op)
    // setFirstNumber(display)
    // setDisplay('')
  }

  const calculateResult = () => {
    if (userInput[1] === '+') {
      setUserInput(parseInt(userInput[0]) + parseInt(userInput[2]))
    } else if (userInput[1] === '-') {
      setUserInput(parseInt(userInput[0]) - parseInt(userInput[2]))
    } else if (userInput[1] === '*') {
      setUserInput(parseInt(userInput[0]) * parseInt(userInput[2]))
    } else if (userInput[1] === '/') {
      setUserInput(parseInt(userInput[0]) / parseInt(userInput[2]))
    }
  }

  const clear = () => {
    setUserInput([])
  }

  return (
    <>
      <div>
        <section className="input">
          <h1 className="input">{userInput}</h1>
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
            *
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

export default HomePage
