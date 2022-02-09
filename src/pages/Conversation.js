import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import styled from 'styled-components'
import { motion } from "framer-motion"
import blur from '../images/blur.png'
import backgroundImage from '../images/conversation-background.jpg'
import { MdOutlineAnnouncement } from 'react-icons/md'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

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
const Separator = styled.div`
  background-image: url(${blur});
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
`
const Middle = styled.div`
  background-color: black;
  padding: 0 20%;
`
const UserInfosSeparator = styled.div`
  border-top : 1px solid rgba(255, 229, 147, 0.253);
`

const Conversation = () => {
  const { id } = useParams()
  const { user } = useContext(UserContext)

  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <LogoTitle>
              <motion.div
                style={{ x: 100 }} 
                animate={{ x: 0 }}          
              >
                <Logo />
                <Title text="Conversation" size='64'/>
              </motion.div>
            </LogoTitle>
          <Separator />
        </Header>
        <Middle>
          <div className='container'>
            <div className='row d-flex align-items-center userinfos'>
              <div className='col-1'>
                <MdOutlineAnnouncement/> 
              </div>
              <div className='col-2'>
                Conversation avec ...
              </div>
              <div className='col-8'>
                <UserInfosSeparator/>
              </div>
            </div>
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default Conversation