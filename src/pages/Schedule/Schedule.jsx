import React, { useEffect } from 'react'
import './Schedule.scss'
// * Components
import { Form, DataTable, DataItem, Message, BackArrow } from '../../components'
import axios from 'axios'

const titles = ['Start time', 'End time']
const data = ['00:00', '00:00']

const Schedule = () => {
  // useEffect(() => {
  //   ;(async () => {
  //     await axios
  //       .get('https://healt-tech-back.herokuapp.com/api/especialidad/', {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           changeOrigin: true,
  //           'Access-Control-Allow-Origin': '*',
  //         },
  //         mode: 'cors',
  //       })
  //       .then((res) => {
  //         console.log(res.data)
  //       })
  //   })()
  // }, [])

  return (
    <section className='Schedule'>
      <Form title='Add Schedule' buttonText='Add'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='time' name='start' id='start-time' min='06:00' max='20:00' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='time' name='end' id='end-time' min='06:00' max='20:00' required />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No schedules to show' />}</DataTable>
      </div>
      <BackArrow link='/doctor' />
    </section>
  )
}

export { Schedule }
