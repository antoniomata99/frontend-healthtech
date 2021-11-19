import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { URL_ADMIN, URL_SPECIALTY } from '../../utils/constants'
import {
  rhElements,
  documentTypeElements,
  civilStateElements,
  sexElements,
  socialStatusElements,
} from '../../utils/dropDownInfo'
// * Styles
import '../../styles/components/UserAdd.scss'
// * Components
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
  const [specialties, setSpecialties] = useState({ id_especialidad: '', nombre: '' })

  useEffect(() => {
    // TODO: Get doctor dropDown data
    ;(async () => {
      const specialtiesData = await getData(URL_SPECIALTY)
      // * Set specialties
      await specialtiesData.map((specialty) => {
        setSpecialties({
          ...specialties,
          id_especialidad: specialty.id_especialidad,
          nombre: specialty.nombre,
        })
      })
      console.log(specialtiesData)
    })()
  }, [])

  const handlePost = (e) => {
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
    if (password === password2) {
      if (type === 'patient') {
        data = { ...data, contrato: contract }
      } else if (type === 'doctor') {
        data = { ...data } // TODO: Add schedule
      }
      postData(data)
    } else {
      setMessage("Password's are not equal 🙄")
    }
  }

  // TODO: Change execution message form

  return (
    <>
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
                  <DropDown defaultOption='Specialty' />
                  <DropDown defaultOption='Schedule' />
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
