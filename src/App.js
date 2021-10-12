import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Components
import { Layout } from './components'
import { Schedule, ConsultingRooms } from './pages'
// * Styles
import './globals.scss'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/doctor/schedule'>
            <Schedule />
          </Route>
          <Route path='/consulting-rooms'>
            <ConsultingRooms />
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
