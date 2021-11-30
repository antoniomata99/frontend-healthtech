import React from 'react'
// * Style
import '../../styles/components/Login.scss'
// * Components
import { Form, DropDown } from '../../components'

const documentType = [
  { id: 1, value: 'Cédula Ciudadanía' },
  { id: 2, value: 'Cédula Extranjería' },
  { id: 3, value: 'Tarjeta de Identidad' },
  { id: 4, value: 'Pasaporte' },
]

const Login = () => {
  return (
    // <section className='Login'>
    //   <Form buttonText='Login'>
    //     <div className='Login-Form__Container'>
    //       <DropDown name='Tipo de Documento' options={documentType} />
    //       <input className='input' type='text' placeholder='Número de Documento' required/>
    //       <input className='Login-Form__Input' type='password' placeholder='Contraseña' required />
    //     </div>
    //   </Form>
    // </section>
  <div className="Login">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" class="box">
                <div class="field">
                  <label for="" class="label">Document Type</label>
                  <div class="control select">
                    <select>
                      <option value="CC">CC</option>
                      <option value="CE">CE</option>
                    </select>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Document Number</label>
                  <div class="control has-icons-left">
                    <input type="input" placeholder="e.g. 123456789" class="input" required/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-id-card"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control has-icons-left">
                    <input type="password" placeholder="*******" class="input" required/>
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div class="field">
                  <button class="button is-success">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export { Login }
