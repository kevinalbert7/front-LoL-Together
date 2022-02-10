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

import backgroundImage from '../images/users-background.png'

import { UsersContext } from '../contexts/UsersContext'
import { getUsers } from '../api/user'

const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
  height: 65vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LogoTitle = styled.div`
  width: 31%;
  margin-top: 5%;
  font-size: 20px;
  .p2 {
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    margin-top: 10%
  }
  @media (max-width: 800px) {
    margin-top: 15%
  }
  @media (max-width: 800px) {
    margin-top: 20%
  }
`
const Middle = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  // margin: auto;
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
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Middle>
        <div className='container'>
          <div className='row'>
            <div className='col mt-2 d-flex justify-content-center fs-3'>
              Trier par :
            </div>
          </div>
          <div className='row my-3'>
            <UserFilter />
          </div>
          <motion.div
            style={{ x: -100 }} 
            animate={{ x: 0 }}          
          >
            <div className='row d-flex justify-content-around'>
              {users.map(element => (
                <UserCard
                  key={element._id}
                  id={element._id}
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