import React from 'react'
import './ConsultingRooms.scss'
// * Components
import { Form, DataTable, DataItem, Message } from '../../components'

const titles = ['ID', 'Name', 'Code', 'Active', 'Piso']
const data = ['001', 'Especialidad', 'E-001', 'True', '1']

const ConsultingRooms = () => {
  return (
    <section className='Schedule'>
      <Form title='Add consulting room' buttonText='Create Room'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='text' name='name' id='start-time' placeholder='Name' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='text' name='code' id='end-time' placeholder='Code' required />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No rooms to show' />}</DataTable>
      </div>
    </section>
  )
}

export { ConsultingRooms }
