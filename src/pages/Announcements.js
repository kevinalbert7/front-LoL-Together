import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { motion } from "framer-motion"

import { getAnnouncements } from '../api/announcement'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import blur from '../images/blur.png'
import backgroundImage from '../images/announcements-background.jpg'

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
  padding: 0 5%;
`

const Announcements = () => {
  const [announcements, setAnnouncements] = useState(null)

  useEffect(() => {
    fetchAnnouncements()
  },[])

  const fetchAnnouncements = async () => {
    const response = await getAnnouncements()
    setAnnouncements (response)
  }

  console.log(announcements);
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
                <Title text="Annonces" size='64'/>
              </motion.div>
            </LogoTitle>
          <Separator />
        </Header>
        <Middle>
          <div className='container' >
            coucou
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default Announcements