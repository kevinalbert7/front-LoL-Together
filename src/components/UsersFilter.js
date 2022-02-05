import React, { useContext } from 'react'

import { UsersContext } from '../contexts/UsersContext'

const UsersFilter = () => {
  const { users, setUsers } = useContext(UsersContext)

  console.log("users", users)
  return (
    <div>
      filter
    </div>
  )
}

export default UsersFilter