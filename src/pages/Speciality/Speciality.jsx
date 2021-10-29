import React from 'react'
import { Form, DataTable, DataItem, Message, DropDown, BackArrow, Button} from '../../components'
import './Speciality.scss'
import { RiEdit2Line, RiDeleteBin6Line, RiEyeFill } from 'react-icons/ri'

const titles = ['ID', 'Nombre', 'Descripción', 'Estado']
const data = ['001', 'Urología', 'Profesional de Urología', 'Activo']

const activeElements = [
    {id: 1, value: false},
    {id: 2, value: true},
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
        <Form title='Agregar Especialidad' buttonText='Crear Especialidad'>
            <div className='Speciality-Form__Container'>
                <input className='Speciality-Form__Input Schedule-Form__Input--name' type="text" id="name-speciality" placeholder='Nombre' required/>
                <input className='Speciality-Form__Input Schedule-Form__Input--name' type="text" id="description" placeholder='Descripción' required/>
                <DropDown name='active' options={activeElements}/>
            </div>
        </Form>
        <div className='Schedule-Table'>
        <div className='Table'>
          <div className='Tableheader'>
            <h2 className='TableTitle'>ID</h2>
            <h2 className='TableTitle'>Nombre</h2>
            <h2 className='TableTitle'>Descripción</h2>
            <h2 className='TableTitle'>Estado</h2>
            <h2 className='TableTitle'>Actions</h2>
          </div>
          <div className='TableContent'>
            {specialities.map((item) => (
              <div className='TableItem'>
                <div className='TableData'>{item.id_especialidad}</div>
                <div className='TableData'>{item.nombre}</div>
                <div className='TableData'>{item.descripcion}</div>
                <div className='TableData'>{item.estado}</div>
                <div className='TableData'>
                  <div className='DataItemButtons'>
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
