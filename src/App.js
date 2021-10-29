import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Components
import { Layout } from './components'
import { ConsultingRooms, Doctors, Schedule, Speciality, Login, DoctorsList } from './pages'
// * Styles
import './globals.scss'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/doctor/schedule'>
            <Schedule />
          </Route>
          <Route path='/doctor/speciality'>
            <Speciality />
          </Route>
          <Route path='/doctor/list'>
            <DoctorsList />
          </Route>
          <Route path='/doctor'>
            <Doctors />
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
