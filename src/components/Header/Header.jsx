import React from 'react'
// * Styles
import '../../styles/components/Header.scss'
// * Icons
import { BsPersonCircle, BsBadgeAr } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__Container'>
        <BsBadgeAr />
        <h1 className='Header__Text'>Administrator</h1>
      </div>
      <div className='Header__Logo'>
        <BsPersonCircle />
      </div>
    </header>
  )
}

export { Header }
