import React from 'react'
import { MdLocalHospital, MdMeetingRoom } from 'react-icons/md'
import {
  BsFillPieChartFill,
  // BsFillFilePersonFill,
  // BsFillPersonFill,
  BsFillPersonCheckFill,
  // BsFillGearFill,
} from 'react-icons/bs'
import '../../styles/components/Menu.scss'
import { MenuLink } from '../../components'

const menu = [
  { link: '/admin', Icon: BsFillPieChartFill, text: 'Dashboard' },
  // { link: '#', Icon: BsFillFilePersonFill, text: 'Profile' },
  // { link: '#', Icon: BsFillPersonFill, text: 'Patient' },
  { link: '/admin/doctor', Icon: MdLocalHospital, text: 'Doctor' },
  { link: '/admin/consulting-rooms', Icon: MdMeetingRoom, text: 'Consulting rooms' },
  { link: '/admin/users', Icon: BsFillPersonCheckFill, text: 'Users' },
  // { link: '#', Icon: BsFillGearFill, text: 'Settings' },
]

const Menu = () => {
  return (
    <div className='Menu'>
      <nav>
        <ul>
          {menu.map((item, index) => (
            <MenuLink {...item} key={index} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export { Menu }
