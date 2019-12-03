// DONE create button on page
// DONE assign numbers to each button
// DONE assign operator to math buttons
// DONE add math for / * + -
// DONE display result
// DONE clear result

import React, { useState } from 'react'

const HomePage = () => {
  const [userInput, setUserInput] = useState([])
  const clickButton = input => {
    setUserInput(prev => {
      return prev + input
    })
  }

  const calculate = () => {
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
          <h1>{userInput}</h1>
        </section>
        <section>
          <button className="gray">💜</button>
          <button className="gray">+/-</button>
          <button className="gray">%</button>
          <button className="orange" onClick={() => clickButton('/')}>
            ÷
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickButton(7)}>
            7
          </button>
          <button className="darkgray" onClick={() => clickButton(8)}>
            8
          </button>
          <button className="darkgray" onClick={() => clickButton(9)}>
            9
          </button>
          <button className="orange" onClick={() => clickButton('*')}>
            *
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickButton(6)}>
            6
          </button>
          <button className="darkgray" onClick={() => clickButton(5)}>
            5
          </button>
          <button className="darkgray" onClick={() => clickButton(4)}>
            4
          </button>
          <button className="orange" onClick={() => clickButton('+')}>
            +
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickButton(3)}>
            3
          </button>
          <button className="darkgray" onClick={() => clickButton(2)}>
            2
          </button>
          <button className="darkgray" onClick={() => clickButton(1)}>
            1
          </button>
          <button className="orange" onClick={() => clickButton('-')}>
            -
          </button>
        </section>
        <section>
          <button className="darkgray" onClick={() => clickButton(0)}>
            0
          </button>
          <button className="darkgray">.</button>
          <button className="darkgray" onClick={() => clear()}>
            AC
          </button>
          <button className="orange" onClick={() => calculate()}>
            =
          </button>
        </section>
        <footer>Made with 💜 at SDG</footer>
      </div>
    </>
  )
}

export default HomePage
