import React from 'react'
import { Form, DataTable, DataItem, Message, DropDown, BackArrow, Button } from '../../components'
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'
// * Style
import './DoctorsList.scss'

const titles = ['ID', 'Name', 'Mail', 'Phone', 'RH']


const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]

const DoctorsList = ({view=true}) => {

  const [specialities, setSpecialities] = React.useState([])

  React.useEffect(() => {
      getData()
  }, [])
  
  const getData = async () => {
      const data = await fetch('https://healt-tech-back.herokuapp.com/api/medico/?format=json', {
          method: 'GET',
          mode: 'cors'
      })
      const specialities = await data.json()
      setSpecialities(specialities)
  }

  return (
    <section className='Speciality'>
      <div className='Schedule-Table' style={{ 'margin-top': '5rem' }}>
        {/* <DataTable titles={titles}>{data.length > 0 ? <DataItem data={data} view={true} /> : <Message text='No available data' />} </DataTable> */}
        <div className='Table'>
          <div className='Table__header'>
            <h2 className='Table__Title'>ID</h2>
            <h2 className='Table__Title'>Name</h2>
            <h2 className='Table__Title'>Mail</h2>
            <h2 className='Table__Title'>Phone</h2>
            <h2 className='Table__Title'>RH</h2>
            <h2 className='Table__Title'>Actions</h2>
          </div>
          <div className='Table__Content'>
            {specialities.map((item) => (
              <div className='Table__Item'>
                <div className='Table__Data'>{item.id_usuario}</div>
                <div className='Table__Data'>{item.nombre_usuario}</div>
                <div className='Table__Data'>{item.correo}</div>
                <div className='Table__Data'>{item.telefono}</div>
                <div className='Table__Data'>{item.grupo_sanguineo}</div>
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
      </div>
      <BackArrow link='/doctor' />
    </section>
  )
}

export { DoctorsList }
