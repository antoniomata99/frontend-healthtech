import React, { useState, createContext, useEffect } from 'react'
import { USER_KEY } from '../utils/constants'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    localStorage.setItem(USER_KEY, userEmail)
  }, [userEmail])

  return <UserContext.Provider value={{ userEmail, setUserEmail }}>{children}</UserContext.Provider>
}

export { UserProvider, UserContext }
