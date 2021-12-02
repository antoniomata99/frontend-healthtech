import React, { useState, createContext } from 'react'

const { Provider } = createContext()

const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(initialState)

  const providerValue = {
    userEmail,
    setUserEmail,
  }

  return <Provider value={providerValue}>{children}</Provider>
}

export { UserProvider }
