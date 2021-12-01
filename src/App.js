import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/styles.scss'
import { Layout, UserForm } from './components'
import {
  ConsultingRooms,
  Doctor,
  Schedule,
  Specialty,
  Login,
  DoctorsList,
  Users,
  ScheduleAppointments,
} from './pages'

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
          <Route exact path='/users' component={Users} />
        <Layout>
          <Route exact path='/admin' component={Home} />
          <Route exact path='/admin/doctor' component={Doctor} />
          <Route exact path='/admin/doctor/schedule' component={Schedule} />
          <Route exact path='/admin/doctor/specialty' component={Specialty} />
          <Route exact path='/admin/doctor/list' component={DoctorsList} />
          <Route exact path='/admin/consulting-rooms' component={ConsultingRooms} />
          <Route exact path='/doctor' component={Doctor} />
          <Route exact path='/doctor/schedule' component={Schedule} />
          <Route exact path='/doctor/specialty' component={Specialty} />
          <Route exact path='/doctor/schedule-appointments' component={ScheduleAppointments} />
          <Route exact path='/doctor/list' component={DoctorsList} />
          <Route exact path='/users/add/:type' component={UserForm} />
          <Route exact path='/users/edit/:type/:idUserEdit' component={UserForm} />
        </Layout>
      </Switch>
    </Router>
  )
}

export { App }
