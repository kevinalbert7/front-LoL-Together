import React, { createContext, useState } from 'react'

const DeletedContext = createContext({})

const DeletedContextProvider = props => {
  const [deleted, setDeleted] = useState(null)

  const value = {
    deleted,
    setDeleted
  }

  return (
    <DeletedContext.Provider value={value}>
        {props.children}
    </DeletedContext.Provider>
  )
}

export {
  DeletedContextProvider,
  DeletedContext
}