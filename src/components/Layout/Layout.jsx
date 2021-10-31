import React from 'react'
// * Styles
import '../../styles/components/Layout.scss'
// * Components
import { Header, Menu } from '../'

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <div className='Layout__Container'>
        <Menu />
        <main className='Layout__Content'>{children}</main>
      </div>
    </div>
  )
}

export { Layout }
