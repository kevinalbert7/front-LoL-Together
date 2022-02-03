import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import blur from '../images/blur.png'
import backgroundImage from '../images/users-background.png'

const Header = styled.div`
  background-image: url(${backgroundImage});
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Separator = styled.div`
  background-image: url(${blur});
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
`
const Middle = styled.div`
  background-color: black;
  padding: 5%;
`

const Users = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState(null)

  useEffect(() => {
    getUsers()
  },[])

  const getUsers = async () => {
    
    const response = await fetch(`http://localhost:5000/users/`, {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        setUsers(data)
    }
  }
  
  console.log("users", users)
  return (
    <>
      <Nav />
      <Header>
        {/* <Logo /> */}
        {/* <Title text="zef" size='72'/> */}
        <Separator />
      </Header>
      <Middle>
        <div className='container'>
          Test
        </div>
      </Middle>
      <Footer />
    </>
  )
}

export default Users