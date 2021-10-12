import React from 'react'
import './Schedule.scss'
// * Components
import { Form, DataTable, DataItem, Message } from '../../components'

const titles = ['Start time', 'End time']
const data = ['00:00', '00:00']

const Schedule = () => {
  return (
    <section className='Schedule'>
      <Form title='Add Schedule' buttonText='Create Schedule'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='time' name='start' id='start-time' min='06:00' max='20:00' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='time' name='end' id='end-time' min='06:00' max='20:00' required />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No schedules to show' />}</DataTable>
      </div>
    </section>
  )
}

export { Schedule }
