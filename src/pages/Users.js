import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import UserFilter from '../components/UsersFilter'
import UserCard from '../components/UserCard'
import Footer from '../components/Footer'

import blur from '../images/blur.png'
import backgroundImage from '../images/users-background.png'

import { UsersContext } from '../contexts/UsersContext'

const Header = styled.div`
  background-image: url(${backgroundImage});
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
const LogoTitle = styled.div`
  left: 35%;
  top: 20%;
  position: absolute;
  font-size: 20px;
  width: 31%;
  .p2 {
    font-size: 15px;
  }
`
const Middle = styled.div`
  background-color: black;
  padding: 5% 20%;
`


const Users = () => {
  const navigate = useNavigate()
  const { users, setUsers } = useContext(UsersContext)

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

  if(!users) {
    return <h1>Chargement...</h1>
  }
  
  // console.log("users", users)
  return (
    <>
      <Nav />
      <Header>
        <LogoTitle>
          <Logo />
          <Title text="Liste des joueurs" size='64'/>
        </LogoTitle>
        <Separator />
      </Header>
      <Middle>
        <div className='container'>
          <div className='row'>
            <UserFilter />
          </div>
          <div className='row'>
            {users.map(element => (
              <UserCard
                key={element._id}
                username={element.username}
                summoner_name={element.summoner_name}
                discord={element.discord}
                region={element.region}
                languages={element.languages}
                disponibilities={element.disponibilities}
                roles={element.roles}
              />
            ))}
          </div>
        </div>
      </Middle>
      <Footer />
    </>
  )
}

export default Users