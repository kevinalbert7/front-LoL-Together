import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import backgroundImage from '../images/policy-background.png'

const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Separator = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
`
const Middle = styled.div`
  background-color: black;
  padding: 5%;
`

const Teams = () => {
  const navigate = useNavigate()
  const [teams, setTeams] = useState(null)

  useEffect(() => {
    getTeams()
  },[])

  const getTeams = async () =>{
    
    const response = await fetch(`http://localhost:5000/teams/`, {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        setTeams(data)
    }
  }
  
  console.log("users", teams)
  return (
    <>
      <Nav />
      <Header>
        <Logo /> 
          <Title text="Page en construction" size='72'/>
        <Separator />
      </Header>
      <Middle>
        <div className='container'>
          {/* Test */}
        </div>
      </Middle>
      <Footer />
    </>
  )
}

export default Teams