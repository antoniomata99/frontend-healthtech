import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import {
  URL_ADMIN,
  URL_DOCTORS,
  URL_PATIENT,
  URL_SPECIALTY,
  URL_AGENDAS,
} from '../../utils/constants'
import '../../styles/components/UserForm.scss'
import {
  rhElements,
  documentTypeElements,
  civilStateElements,
  sexElements,
  socialStatusElements,
} from '../../utils/dropDownInfo'
import { Container, Form, InputText, DropDown, Message } from '..'

const UserForm = () => {
  const { type } = useParams()
  const { getData, postData, message, setMessage, error } = useAxios(URL_ADMIN)
  // ! Basic info
  const [documentType, setDocumentType] = useState()
  const [document, setDocument] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [sex, setSex] = useState()
  const [birthday, setBirthday] = useState()
  const [rh, setRh] = useState()
  const [socialStatus, setSocialStatus] = useState()
  const [civilState, setCivilState] = useState()
  // ! Patient info
  const [contract, setContract] = useState()
  // ! Doctor info
  const [specialties, setSpecialties] = useState([])
  const [agendas, setAgendas] = useState([])
  const [specialty, setSpecialty] = useState([])
  const [agenda, setAgenda] = useState([])

  useEffect(() => {
    ;(async () => {
      if (type === 'doctor') {
        const specialtiesData = await getData(URL_SPECIALTY)
        const agendaData = await getData(URL_AGENDAS)
        const specialtiesElements = []
        const agendaElements = []
        // * Set specialties
        specialtiesData.map(async (specialty) => {
          await specialtiesElements.push({
            id: specialty.id_especialidad,
            value: specialty.id_especialidad,
          })
        })
        agendaData.map(async (agenda) => {
          await agendaElements.push({
            id: agenda.id_agenda,
            value: agenda.id_agenda,
          })
        })
        setSpecialties(specialtiesElements)
        setAgendas(agendaElements)
      }
    })()
  }, [type])

  const handlePost = async (e) => {
    e.preventDefault()
    let data = {
      tipo_documento: documentType,
      numero_documento: document,
      nombre_usuario: name,
      contrasena: password,
      correo: email,
      telefono: phone,
      sexo: sex,
      fecha_nacimiento: birthday,
      grupo_sanguineo: rh,
      estrato: socialStatus,
      estado_civil: civilState,
    }
    let url = ''
    if (password === password2) {
      if (type === 'patient') {
        data = { ...data, contrato: contract, id_perfil: '2' }
        url = URL_PATIENT
      } else if (type === 'doctor') {
        data = { ...data, id_agenda: agenda, id_especialidad: specialty, id_perfil: '3' }
        url = URL_DOCTORS
      } else {
        data = { ...data, id_perfil: '1' }
        url = URL_ADMIN
      }
      await postData(data, url)
    } else {
      setMessage("Password's are not equal 🙄")
    }
  }

  return (
    <>
      {/* // TODO: Change execution message form */}
      {(error || message.length > 0) && (
        <Message modifier='error' text={`Error: ${message}`} state={true} />
      )}
      <Container button={true} linkText={'/users'}>
        <Form title={`Add ${type ? type : ''}`} handleData={handlePost}>
          <InputText placeholder='Full Name' defaultValue={name} setData={setName} />
          <InputText placeholder='Mail' type='email' defaultValue={email} setData={setEmail} />
          <InputText
            placeholder='Birthday'
            type='date'
            defaultValue={birthday}
            setData={setBirthday}
          />
          <InputText
            placeholder='Phone Number'
            type='number'
            defaultValue={phone}
            setData={setPhone}
          />
          <InputText
            placeholder='Document Number'
            type='number'
            defaultValue={document}
            setData={setDocument}
          />
          <DropDown
            defaultOption='Document type'
            options={documentTypeElements}
            setData={setDocumentType}
          />
          <DropDown defaultOption='RH' options={rhElements} setData={setRh} />
          <DropDown defaultOption='Sex' options={sexElements} setData={setSex} />
          <DropDown
            defaultOption='Social status'
            options={socialStatusElements}
            setData={setSocialStatus}
          />
          <DropDown
            defaultOption='Civil State'
            options={civilStateElements}
            setData={setCivilState}
          />
          {(type === 'doctor' || type === 'patient') && (
            <div className='UserAdd__Additional-section'>
              <h4 className='UserAdd__Section-Title'>Additional Information</h4>
              {type === 'doctor' && (
                <>
                  <DropDown
                    defaultOption='Id Specialty'
                    options={specialties}
                    setData={setSpecialty}
                  />
                  <DropDown defaultOption='Id Agenda' options={agendas} setData={setAgenda} />
                </>
              )}
              {type === 'patient' && (
                <InputText
                  placeholder='Contract number'
                  type='number'
                  defaultValue={contract}
                  setData={setContract}
                />
              )}
            </div>
          )}
          <div className='UserAdd__Additional-section'>
            <h4 className='UserAdd__Section-Title'>Security</h4>
            <InputText
              placeholder='Password'
              type='password'
              defaultValue={password}
              setData={setPassword}
            />
            <InputText
              placeholder='Repeat password'
              type='password'
              defaultValue={password2}
              setData={setPassword2}
            />
          </div>
        </Form>
      </Container>
    </>
  )
}

export { UserForm }
