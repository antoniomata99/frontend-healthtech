import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/styles.scss'
import { AdminLayout, DoctorLayout, PatientLayout } from './layouts'
import { UserForm } from './forms'
import {
  ConsultingRooms,
  Doctor,
  Schedule,
  Specialty,
  Login,
  DoctorsList,
  Users,
  ScheduleAppointments,
  Patient,
} from './pages'

const Home = () => <div>Home</div>

function App() {
  return (
    <Router>
      <Switch>
        <AdminLayout>
          <Route exact path='/login' component={Login} />
          <Route exact path='/admin' component={Home} />
          <Route exact path='/doctor' component={Doctor} />
          <Route exact path='/doctor/schedule' component={Schedule} />
          <Route exact path='/doctor/specialty' component={Specialty} />
          <Route exact path='/doctor/schedule-appointments' component={ScheduleAppointments} />
          <Route exact path='/doctor/list' component={DoctorsList} />
          <Route exact path='/consulting-rooms' component={ConsultingRooms} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/users/add/:type' component={UserForm} />
          <Route exact path='/patient' component={Patient} />
        </AdminLayout>
      </Switch>
    </Router>
  )
}

export { App }
