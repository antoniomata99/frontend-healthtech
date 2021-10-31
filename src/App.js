import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Styles
import './styles/styles.scss'
// * Components and pages
import { Layout } from './components'
import {
  ConsultingRooms,
  Doctor,
  Schedule,
  Specialty,
  Login,
  DoctorsList,
} from './pages'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/doctor' component={Doctor} />
          <Route exact path='/doctor/schedule' component={Schedule} />
          <Route exact path='/doctor/specialty' component={Specialty} />
          <Route exact path='/doctor/list' component={DoctorsList} />
          <Route exact path='/consulting-rooms' component={ConsultingRooms} />
        </Switch>
      </Layout>
    </Router>
  )
}

export { App }
