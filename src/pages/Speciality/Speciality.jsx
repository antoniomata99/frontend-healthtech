import React from 'react'
import { Form, DataTable, DataItem, Message, DropDown, BackArrow, Button} from '../../components'
import './Speciality.scss'
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'

const titles = ['ID', 'Name', 'Description', 'State']
const data = ['001', 'Urología', 'Profesional de Urología', 'Activo']

const activeElements = [
  { id: 1, value: false },
  { id: 2, value: true },
]



const Speciality = ({view=false}) =>{

    const [specialities, setSpecialities] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [])
    
    const getData = async () => {
        const data = await fetch('https://healt-tech-back.herokuapp.com/api/especialidad/?format=json', {
            method: 'GET',
            mode: 'cors'
        })
        const specialities = await data.json()
        setSpecialities(specialities)
    }
    return(
    <section className="Speciality">
        <Form title='Add Speciality' buttonText='Add'>
            <div className='Speciality-Form__Container'>
                <input className='Speciality-Form__Input Schedule-Form__Input--start' type="text" id="name-speciality" placeholder='Name' required/>
                <input className='Speciality-Form__Input Schedule-Form__Input--name' type="text" id="description" placeholder='Description' required/>
                <DropDown name='active' options={activeElements}/>
            </div>
        </Form>
        <div className='Schedule-Table'>
        <div className='Table'>
          <div className='Table__header'>
            <h2 className='Table__Title'>ID</h2>
            <h2 className='Table__Title'>Name</h2>
            <h2 className='Table__Title'>Description</h2>
            <h2 className='Table__Title'>State</h2>
            <h2 className='Table__Title'>Actions</h2>
          </div>
          <div className='Table__Content'>
            {specialities.map((item) => (
              <div className='Table__Item'>
                <div className='Table__Data'>{item.id_especialidad}</div>
                <div className='Table__Data'>{item.nombre}</div>
                <div className='Table__Data'>{item.descripcion}</div>
                <div className='Table__Data'>{item.estado}</div>
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

export { Speciality }
