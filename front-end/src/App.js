import React from 'react'
// import { inject, observer } from 'mobx-react'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'

// @inject('userStore')
// @observer
class App extends React.Component {
  render() {
    // const { user } = this.props.userStore
    // console.log(user.name)
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
