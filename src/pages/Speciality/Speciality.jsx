import React from 'react'
import { Form, DataTable, DataItem, Message, DropDown, BackArrow } from '../../components'
import './Speciality.scss'

const titles = ['ID', 'Name', 'Description', 'State']
const data = ['001', 'Urología', 'Profesional de Urología', 'Activo']

const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]

const Speciality = () => {
  return (
    <section className='Speciality'>
      <Form title='Add Speciality' buttonText='Add'>
        <div className='Speciality-Form__Container'>
          <input className='Speciality-Form__Input Schedule-Form__Input--start' type='text' id='name-speciality' placeholder='e.g Juan Perez' required />
          <input className='Speciality-Form__Input Schedule-Form__Input--name' type='text' id='description' placeholder='e.g Urology' required />
          <DropDown name='active' options={activeElements} />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No available data' />} </DataTable>
      </div>
      <BackArrow link='/doctor' />
    </section>
  )
}

export { Speciality }
