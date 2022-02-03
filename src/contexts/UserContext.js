import React, { createContext, useState, useEffect } from 'react'

const UserContext = createContext({})

const UserContextProvider = props => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])
    
    const getUser = async () => {
        const response = await fetch(`http://localhost:5000/auth/me`, {
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        
        const data = await response.json()
        if (!data.error) {
            setUser(data)
            // console.log(user);

        }
    }

    const value = {
        user,
        setUser,
        getUser
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export {
    UserContextProvider,
    UserContext
}