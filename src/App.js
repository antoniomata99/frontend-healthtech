import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * Styles
import './styles/styles.scss'
// * Components and pages
import { Layout } from './components'
import { ConsultingRooms, Doctor, Schedule, Specialty, Login, DoctorsList, UserAdd } from './pages'

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
          <Route exact path='/doctor/list' component={DoctorsList} />
          <Route exact path='/consulting-rooms' component={ConsultingRooms} />
          <Route exact path='/users/add/' component={UserAdd} />
          {/* <Route exact path='/users/add/:type' component={UserAdd} /> */}
        </Layout>
      </Switch>
    </Router>
  )
}

export { App }
