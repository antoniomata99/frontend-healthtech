import React, { useState, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('')

  return <UserContext.Provider value={{ userEmail, setUserEmail }}>{children}</UserContext.Provider>
}

export { UserProvider, UserContext }
