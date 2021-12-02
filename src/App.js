import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import '@styles/styles.scss'
import { UserForm } from '@forms'
import { AdminLayout } from '@layouts'
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
} from '@pages'

const Home = () => (
  <AdminLayout>
    <div>Home</div>
  </AdminLayout>
)

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route exact path='/login' component={Login} />
        {/* Admin Pages */}
        <Route exact path='/admin' component={Home} />
        <Route exact path='/admin/doctor' component={Doctor} />
        <Route exact path='/admin/doctor/schedule' component={Schedule} />
        <Route exact path='/admin/doctor/specialty' component={Specialty} />
        <Route exact path='/admin/doctor/schedule-appointments' component={ScheduleAppointments} />
        <Route exact path='/admin/doctor/list' component={DoctorsList} />
        <Route exact path='/admin/consulting-rooms' component={ConsultingRooms} />
        <Route exact path='/admin/users' component={Users} />
        <Route exact path='/admin/users/add/:type' component={UserForm} />
        {/* Patient Pages */}
        <Route exact path='/patient' component={Patient} />
        {/* Doctor Pages */}
        <Route exact path='/doctor' component={Patient} />
      </Switch>
    </Router>
  )
}

export { App }
