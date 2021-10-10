import React from 'react'
// * Styles
import './Layout.scss'
// * Components
import { Header, Menu } from '../'

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <div className='Layout__Header'>
        <Header />
      </div>
      <div className='Layout__Container'>
        <div className='Layout__Menu'>
          <Menu />
        </div>
        <main className='Layout__Content'>{children}</main>
      </div>
    </div>
  )
}

export { Layout }
