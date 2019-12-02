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
    console.log('clicked button' + { input })
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
        <section>
          <h1>{userInput}</h1>
        </section>
        <section>
          <button>💜</button>
          <button>+/-</button>
          <button>%</button>
          <button onClick={() => clickButton('/')}>÷</button>
        </section>
        <section>
          <button onClick={() => clickButton(7)}>7</button>
          <button onClick={() => clickButton(8)}>8</button>
          <button onClick={() => clickButton(9)}>9</button>
          <button onClick={() => clickButton('*')}>*</button>
        </section>
        <section>
          <button onClick={() => clickButton(6)}>6</button>
          <button onClick={() => clickButton(5)}>5</button>
          <button onClick={() => clickButton(4)}>4</button>
          <button onClick={() => clickButton('+')}>+</button>
        </section>
        <section>
          <button onClick={() => clickButton(3)}>3</button>
          <button onClick={() => clickButton(2)}>2</button>
          <button onClick={() => clickButton(1)}>1</button>
          <button onClick={() => clickButton('-')}>-</button>
        </section>
        <section>
          <button onClick={() => clickButton(0)}>0</button>
          <button>.</button>
          <button onClick={() => clear()}>AC</button>
          <button onClick={() => calculate()}>=</button>
        </section>
      </div>
    </>
  )
}

export default HomePage
