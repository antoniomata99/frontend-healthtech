import React from 'react'
import './ConsultingRooms.scss'
// * Components
import { Form, DataTable, DataItem, Message, DropDown } from '../../components'

const titles = ['ID', 'Name', 'Code', 'Active', 'Piso']
const data = ['001', 'Especialidad', 'E-001', 'True', '1']
const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]
const floorElements = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 2, value: 3 },
  { id: 2, value: 4 },
]

const ConsultingRooms = () => {
  return (
    <section className='Schedule'>
      <Form title='Add consulting room' buttonText='Create Room'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='text' name='name' id='start-time' placeholder='Name' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='text' name='code' id='end-time' placeholder='Code' required />
          <DropDown name='active' options={activeElements} />
          <DropDown name='floor' options={floorElements} />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No rooms to show' />}</DataTable>
      </div>
    </section>
  )
}

export { ConsultingRooms }
