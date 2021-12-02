import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../../styles/globals/Users.scss'
import {
  Container,
  Button,
} from '../../components'

const Dashboard = () => {
  return (
    <Container>
      <section className='Users_Menu'>
        <div className='Users_Button Users_Button--download'>
          <a href='https://healt-tech-back.herokuapp.com/api/informeCita' rel='noreferrer'>
            <Button modifier='download' name='Download'>
              <AiOutlineCloudDownload />
            </Button>
          </a>
        </div>
      </section>
    </Container>
  )
}

export { Dashboard }
