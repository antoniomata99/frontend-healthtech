import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
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
import { Container, Form, InputText, DropDown } from '../../components'

const UserAdd = () => {
  // Basic info
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
  // Patient info
  const [contract, setContract] = useState()
  // Doctor info

  const { type } = useParams()
  const { postData } = useAxios()

  useEffect(() => {
    // TODO: Get doctor dropDown data
  }, [])

  const handlePost = (e) => {
    e.preventDefault()
    // postData({ hora_inicio: startTime, hora_fin: endTime })
  }

  return (
    <Container button={true} linkText={'/users'}>
      <Form title={`Add ${type ? type : ''}`}>
        <InputText placeholder='First Name' defaultValue={name} setData={setName} />
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
        {type == 'doctor' && (
          <div className='UserAdd__Additional-section'>
            <h4 className='UserAdd__Section-Title'>Additional Information</h4>
            <DropDown defaultOption='Specialty' />
            <DropDown defaultOption='Schedule' />
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
  )
}

export { UserAdd }
