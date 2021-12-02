import React from 'react'
import { BsPersonCircle, BsBadgeAr } from 'react-icons/bs'
import '../../styles/components/Header.scss'

const Header = ({ userType }) => {
  return (
    <header className='Header'>
      <div className='Header__Container'>
        <BsBadgeAr />
        <h1 className='Header__Text'>{userType}</h1>
      </div>
      <div className='Header__Logo'>
        <BsPersonCircle />
      </div>
    </header>
  )
}

export { Header }
