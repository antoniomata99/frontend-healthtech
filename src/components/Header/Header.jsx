import React from 'react'
import './Header.scss'
import { BsPersonCircle, BsBadgeAr } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__Logo Header__Logo--company'>
        <BsBadgeAr />
      </div>
      <div className='Header__text'>Administrator</div>
      <div className='Header__Logo Header__Logo--user'>
        <BsPersonCircle />
      </div>
    </header>
  )
}

export { Header }
