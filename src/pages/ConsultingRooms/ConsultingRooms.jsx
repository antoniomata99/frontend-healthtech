import React, { useEffect, useState } from 'react'
import './ConsultingRooms.scss'
// * Components
import { Form, DataTable, DataItem, Message, DropDown, Button } from '../../components'
// * Icons
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
import axios from 'axios'

const titles = ['ID', 'Name', 'Code', 'Active', 'Floor']
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

const ConsultingRooms = ({ view = false }) => {
  const [dataRooms, setDataRooms] = useState([])
  useEffect(() => {
    axios
      .get('https://healt-tech-back.herokuapp.com/api/horarioMedico/')
      .then((res) => res.data)
      .then((data) => {
        setDataRooms(data)
      })
  }, [])

  return (
    <section className='Schedule'>
      <Form title='Add consulting room' buttonText='Add'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='text' name='name' id='start-time' placeholder='e.g Room 001' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='text' name='code' id='end-time' placeholder='e.g Room-001' required />
          <DropDown name='active' options={activeElements} />
          <DropDown name='floor' options={floorElements} />
        </div>
      </Form>
      <div className='Schedule-Table'>
        <div className='Table'>
          <div className='Table__header'>
            <h2 className='Table__Title'>ID</h2>
            <h2 className='Table__Title'>Start time</h2>
            <h2 className='Table__Title'>End time</h2>
            <h2 className='Table__Title'>Actions</h2>
          </div>
          <div className='Table__Content'>
            {dataRooms.map((item) => (
              <div className='Table__Item'>
                <div className='Table__Data'>{item.id_horario_medico}</div>
                <div className='Table__Data'>{item.hora_inicio}</div>
                <div className='Table__Data'>{item.hora_fin}</div>
                <div className='Table__Data'>
                  <div className='DataItem__Buttons'>
                    <Button modifier='edit'>
                      <RiEdit2Line />
                    </Button>
                    <Button modifier='delete'>
                      <RiDeleteBin6Line />
                    </Button>
                    {view && (
                      <Button modifier='view'>
                        <RiEyeFill />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} /> : <Message text='No rooms to show' />}</DataTable> */}
      </div>
    </section>
  )
}

export { ConsultingRooms }
