import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage2 from './pages/HomePage2'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage2}></Route>
      </Switch>
    </Router>
  )
}

export default App
