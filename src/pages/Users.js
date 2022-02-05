import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import UserFilter from '../components/UsersFilter'
import UserCard from '../components/UserCard'
import Footer from '../components/Footer'

import blur from '../images/blur.png'
import backgroundImage from '../images/users-background.png'

import { UsersContext } from '../contexts/UsersContext'
import { getUsers } from '../api/user'

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
  padding: 0 20%;
`


const Users = () => {
  const navigate = useNavigate()
  const { users, setUsers } = useContext(UsersContext)

  useEffect(() => {
    fetchUsers()
  },[])

  const fetchUsers = async () => {
    
    const data = await getUsers()

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
          <motion.div
            style={{ x: 100 }} 
            animate={{ x: 0 }}          
          >
            <Logo />
            <Title text="Liste des joueurs" size='64'/>
          </motion.div>
        </LogoTitle>
        <Separator />
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Middle>
        <div className='container'>
          <div className='row my-3'>
            <UserFilter />
          </div>
          <motion.div
            style={{ x: -100 }} 
            animate={{ x: 0 }}          
          >
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
          </motion.div>
        </div>
      </Middle>
      </motion.div>
      <Footer />
    </>
  )
}

export default Users