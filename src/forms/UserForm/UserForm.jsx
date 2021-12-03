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
import {
  rhElements,
  documentTypeElements,
  civilStateElements,
  sexElements,
  socialStatusElements,
} from '../../utils/dropDownInfo'
import '../../styles/components/UserForm.scss'
import { AdminLayout } from '../../layouts'
import { Container, Form, InputText, DropDown, Message } from '../../components'

const UserForm = () => {
  const { type, idUserEdit } = useParams()
  const { getData, postData, updateData, message, setMessage, error } = useAxios(URL_ADMIN)
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
            value: `${specialty.nombre}`,
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
      if (idUserEdit) {
        const data = await getData(`${getUrlByType()}${idUserEdit}/`)
        addUserInfo(data)
      }
    })()
  }, [type])

  const getUrlByType = () =>
    type === 'admin' ? URL_ADMIN : type === 'doctor' ? URL_DOCTORS : URL_PATIENT

  const addUserInfo = (data) => {
    setDocument(data.numero_documento)
    setDocument(data.numero_documento)
    setName(data.username)
    setPassword(data.contrasena)
    setEmail(data.email)
    setPhone(data.telefono)
    setBirthday(data.fecha_nacimiento)
    if (type === 'patient') {
      setContract(data.contrato)
    }
  }

  const fillData = () => {
    let data = {
      tipo_documento: documentType,
      numero_documento: document,
      username: name,
      password: password,
      email: email,
      telefono: phone,
      sexo: sex,
      fecha_nacimiento: birthday,
      grupo_sanguineo: rh,
      estrato: socialStatus,
      estado_civil: civilState,
    }
    if (type === 'patient') {
      data = { ...data, contrato: contract, id_perfil: '2' }
    } else if (type === 'doctor') {
      data = { ...data, id_agenda: agenda, id_especialidad: specialty, id_perfil: '3' }
    } else {
      data = { ...data, id_perfil: '1' }
    }
    return data
  }

  const handleData = async (e) => {
    e.preventDefault()
    if (password === password2) {
      if (idUserEdit) {
        await updateData(idUserEdit, fillData(), getUrlByType())
      } else {
        await postData(fillData(), getUrlByType())
      }
    } else {
      setMessage("Password's are not equal 🙄")
    }
  }

  return (
    <AdminLayout>
      {error && (
        <Message modifier='error' text={`Error: ${message}`} state={true} setMessage={setMessage} />
      )}
      {!error && message.length > 3 && (
        <Message
          modifier='good'
          text={`Success: ${message}`}
          state={true}
          setMessage={setMessage}
        />
      )}
      <Container button={true} linkText={'/admin/users'} title={`User ${type ? type : ''}`}>
        <Form
          title={`Add ${type ? type : ''}`}
          handleData={handleData}
          isUpdate={idUserEdit ? true : false}
        >
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
    </AdminLayout>
  )
}

export { UserForm }
