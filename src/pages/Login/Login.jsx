import React, { useContext, useState } from 'react'
import '../../styles/components/Login.scss'
import { useHistory } from 'react-router'
import { URL_LOGIN } from '../../utils/constants'
import { useAxios } from '../../hooks/useAxios'
import { UserContext } from '../../context/UserContext'

const Login = () => {
  const { postData } = useAxios()
  const history = useHistory()
  const [role, setRole] = useState()
  const [email, setEmail] = useState()
  const [passwd, setPasswd] = useState()
  const { setUserEmail } = useContext(UserContext)

  const handleData = async (e) => {
    e.preventDefault()
    const data = await postData(
      {
        username: email,
        password: passwd,
        perfil: role,
      },
      URL_LOGIN
    )

    if (data !== 'Credenciales invalidas') {
      if (data?.user.username) {
        setUserEmail(data.user.username)
        if (role == '1') {
          history.push('/admin')
        } else if (role == '2') {
          history.push('/patient')
        } else if (role == '3') {
          history.push('/doctor')
        }
      } else {
        alert('Error login the user')
      }
    }else{
      alert('Error login the user')
    }
  }

  return (
    <div className='Login'>
      <section class='hero is-primary is-fullheight'>
        <div class='hero-body'>
          <div class='container'>
            <div class='columns is-centered'>
              <div class='column is-5-tablet is-4-desktop is-3-widescreen'>
                <form action='' class='box' onSubmit={(e) => handleData(e)}>
                  <div class='field'>
                    <label for='' class='label'>
                      Role Type
                    </label>
                    <div class='control select'>
                      <select onChange={(e) => setRole(e.target.value)} required>
                        <option value='' selected disabled>
                          -- Select an option --
                        </option>
                        <option value='1'>Administrator</option>
                        <option value='2'>Patient</option>
                        <option value='3'>Medic</option>
                      </select>
                    </div>
                  </div>
                  <div class='field'>
                    <label for='' class='label'>
                      Email
                    </label>
                    <div class='control has-icons-left'>
                      <input
                        type='input'
                        placeholder='e.g. john@doe.com'
                        class='input'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span class='icon is-small is-left'>
                        <i class='fas fa-envelope'></i>
                      </span>
                    </div>
                  </div>
                  <div class='field'>
                    <label for='' class='label'>
                      Password
                    </label>
                    <div class='control has-icons-left'>
                      <input
                        type='password'
                        placeholder='*******'
                        class='input'
                        required
                        onChange={(e) => setPasswd(e.target.value)}
                      />
                      <span class='icon is-small is-left'>
                        <i class='fas fa-lock'></i>
                      </span>
                    </div>
                  </div>
                  <div class='field'>
                    <button class='button is-success'>Login</button>
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
