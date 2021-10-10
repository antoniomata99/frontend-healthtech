import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Components
import { Layout } from './components'
// * Styles
import './globals.scss'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  )
}

export { App }
