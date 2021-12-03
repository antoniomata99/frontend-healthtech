import React from 'react'
import '../../styles/globals/Users.scss'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Container, Button } from '../../components'
import { AdminLayout } from '../../layouts'

const Dashboard = () => {
  return (
    <AdminLayout>
      <Container title='Appointments report'>
        <section className='Users_Menu Users_Menu--center'>
          <div className='Users_Button Users_Button--download'>
            <a
              href='https://healt-tech-back.herokuapp.com/api/informeCita'
              rel='noreferrer'
              title='Download appointments reports'
            >
              <Button modifier='download' name='Download'>
                <AiOutlineCloudDownload />
              </Button>
            </a>
          </div>
        </section>
      </Container>
    </AdminLayout>
  )
}

export { Dashboard }
