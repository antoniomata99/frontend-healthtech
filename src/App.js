import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/styles.scss'
<<<<<<< HEAD
import { Layout, UserForm } from './components'
import { ConsultingRooms, Doctor, Schedule, Specialty, Login, DoctorsList } from './pages'
=======
// * Components and pages
import { Layout } from './components'
import {
  ConsultingRooms,
  Doctor,
  Schedule,
  Specialty,
  Login,
  DoctorsList,
  Schappointment,
  Users,
} from './pages'
>>>>>>> jorge

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/doctor' component={Doctor} />
          <Route exact path='/doctor/schedule' component={Schedule} />
          <Route exact path='/doctor/specialty' component={Specialty} />
          <Route exact path='/doctor/Schappointment' component={Schappointment} />
          <Route exact path='/doctor/list' component={DoctorsList} />
          <Route exact path='/consulting-rooms' component={ConsultingRooms} />
<<<<<<< HEAD
          <Route exact path='/users/add/' component={UserForm} />
          {/* <Route exact path='/users/add/:type' component={UserAdd} /> */}
=======
          <Route exact path='/users' component={Users} />
>>>>>>> jorge
        </Layout>
      </Switch>
    </Router>
  )
}

export { App }
