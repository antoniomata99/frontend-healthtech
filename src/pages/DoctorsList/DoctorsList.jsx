import React from 'react'
import { Form, DataTable, DataItem, Message, DropDown, BackArrow } from '../../components'
// * Style
import './DoctorsList.scss'

const titles = ['ID', 'Name', 'Mail', 'Phone', 'RH']
const data = ['001', 'Juan Andres', 'Juan@yahoo.es', '123456789', 'O+']

const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]

const DoctorsList = () => {
  return (
    <section className='Speciality'>
      <div className='Schedule-Table' style={{ 'margin-top': '5rem' }}>
        <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} view={true} /> : <Message text='No available data' />} </DataTable>
      </div>
      <BackArrow link='/doctor' />
    </section>
  )
}

export { DoctorsList }
