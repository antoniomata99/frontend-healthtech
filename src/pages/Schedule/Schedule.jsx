import React, { useEffect, useState } from 'react'
import './Schedule.scss'
// * Components
import { Form, DataTable, DataItem, Message, BackArrow, Button } from '../../components'
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
import axios from 'axios'

const titles = ['Start time', 'End time']
const datas = [
  ['00:00', '00:00'],
  ['00:00', '00:00'],
  ['00:00', '00:00'],
]

const Schedule = ({ view = false }) => {
  const [dataSchedule, setDataSchedule] = useState([])
  useEffect(() => {
    axios
      .get('https://healt-tech-back.herokuapp.com/api/horarioMedico/')
      .then((res) => res.data)
      .then((data) => {
        setDataSchedule(data)
      })
  }, [])

  console.log(dataSchedule)

  return (
    <section className='Schedule'>
      <Form title='Add Schedule' buttonText='Add'>
        <div className='Schedule-Form__Container'>
          <input className='Schedule-Form__Input Schedule-Form__Input--start' type='time' name='start' id='start-time' min='06:00' max='20:00' required />
          <input className='Schedule-Form__Input Schedule-Form__Input--end' type='time' name='end' id='end-time' min='06:00' max='20:00' required />
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
            {dataSchedule.map((item) => (
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
        {/* <DataTable titles={titles}>{datas.length > 0 ? datas.map((data, index) => <DataItem data={data} />) : null}</DataTable> */}
      </div>
      <BackArrow link='/doctor' />
    </section>
  )
}

export { Schedule }
