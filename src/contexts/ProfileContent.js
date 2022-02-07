import React, { createContext, useState } from 'react'

const ProfileContext = createContext({})

const ProfileContextProvider = props => {
  const [profile, setProfile] = useState(null)

  const value = {
    profile,
    setProfile
  }

  return (
    <ProfileContext.Provider value={value}>
        {props.children}
    </ProfileContext.Provider>
  )
}

export {
  ProfileContextProvider,
  ProfileContext
}