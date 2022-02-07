import React, { createContext, useState } from 'react'

const AnnouncementContext = createContext({})

const AnnouncementContextProvider = props => {
  const [announcement, setAnnouncement] = useState(null)

  const value = {
    announcement,
    setAnnouncement
  }

  return (
    <AnnouncementContext.Provider value={value}>
        {props.children}
    </AnnouncementContext.Provider>
  )
}

export {
  AnnouncementContextProvider,
  AnnouncementContext
}