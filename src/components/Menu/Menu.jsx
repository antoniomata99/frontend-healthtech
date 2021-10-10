import React from 'react'
// * Icons
import { BsFillPieChartFill, BsFillFilePersonFill, BsFillPersonFill, BsFillPersonCheckFill, BsFillGearFill } from 'react-icons/bs'
import { MdLocalHospital, MdMeetingRoom } from 'react-icons/md'
// * Components
import { MenuLink } from '../'

const menu = [
  { link: '#', Icon: BsFillPieChartFill, text: 'Dashboard' },
  { link: '#', Icon: BsFillFilePersonFill, text: 'Profile' },
  { link: '#', Icon: BsFillPersonFill, text: 'Patient' },
  { link: '#', Icon: MdLocalHospital, text: 'Doctor' },
  { link: '#', Icon: MdMeetingRoom, text: 'Consulting rooms' },
  { link: '#', Icon: BsFillPersonCheckFill, text: 'Users' },
  { link: '#', Icon: BsFillGearFill, text: 'Settings' },
]

const Menu = () => {
  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <MenuLink {...item} />
        ))}
      </ul>
    </nav>
  )
}

export { Menu }
