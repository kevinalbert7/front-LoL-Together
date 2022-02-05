import React, { createContext, useState } from 'react'

const UsersContext = createContext({})

const UsersContextProvider = props => {
  const [users, setUsers] = useState(null)

  const value = {
    users,
    setUsers
  }

  return (
    <UsersContext.Provider value={value}>
        {props.children}
    </UsersContext.Provider>
  )
}

export {
  UsersContextProvider,
  UsersContext
}