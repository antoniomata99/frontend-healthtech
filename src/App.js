import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Styles
import './styles/styles.scss'
// * Components and pages
import { Layout } from './components'
import { ConsultingRooms, Doctor, Schedule, Specialty, Login, DoctorsList } from './pages'

const Home = () => <div>Home</div>
const Patient = () => <div>Patient</div>
const DoctorModule = () => <div>Doctor</div>

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/patient' component={Patient} />
          <Route exact path='/doctor' component={DoctorModule} />
        <Layout>
          <Route exact path='/admin' component={Home} />
          <Route exact path='/admin/doctor' component={Doctor} />
          <Route exact path='/admin/doctor/schedule' component={Schedule} />
          <Route exact path='/admin/doctor/specialty' component={Specialty} />
          <Route exact path='/admin/doctor/list' component={DoctorsList} />
          <Route exact path='/admin/consulting-rooms' component={ConsultingRooms} />
        </Layout>
      </Switch>
    </Router>
  )
}

export { App }
