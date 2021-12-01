import React from 'react'
import '@styles/components/Login.scss'
import { Form, DropDown } from '@components'

const documentType = [
  { id: 1, value: 'Cédula Ciudadanía' },
  { id: 2, value: 'Cédula Extranjería' },
  { id: 3, value: 'Tarjeta de Identidad' },
  { id: 4, value: 'Pasaporte' },
]

const Login = () => {
  return (
    <section className='Login'>
      <Form buttonText='Login'>
        <div className='Login-Form__Container'>
          <DropDown name='Tipo de Documento' options={documentType} />
          <input
            className='Login-Form__Input'
            type='text'
            placeholder='Número de Documento'
            required
          />
          <input className='Login-Form__Input' type='password' placeholder='Contraseña' required />
        </div>
      </Form>
    </section>
  )
}

export { Login }
