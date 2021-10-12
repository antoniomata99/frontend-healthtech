import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Components
import { Layout, Schedule } from './components'
// * Styles
import './globals.scss'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/schedule'>
            <Schedule />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export { App }
