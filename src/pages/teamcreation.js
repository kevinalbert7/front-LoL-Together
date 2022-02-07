import React, { useState, useEffect, useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { 
  getRegion,
  optionsRegions, 
} from '../api/filter'

import backgroundImage from '../images/teamSignup-background.jpg'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'


const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
  height: 115vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const SideDiv = styled.div`
  left: 10%;
  top: 10%;
  position: absolute;
  font-size: 20px;
  width: 30%;
  .p2 {
    font-size: 15px;
  }
`
const InputContainer = styled.div`
  width: 100px;
  position: absolute;
  top: 30%;
  right: 20%;
`

const TeamCreation = () => {

  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  fetch('http://localhost:5000/teams', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      // name: values.name,
    })
  })

  console.log(formik.values)

  return (
    <>
    <Nav />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        {/* <TitleContainer>
        </TitleContainer> */}
      <SideDiv>
        <motion.div
        style={{ x: -100 }} 
        animate={{ x: 0 }} 
        >
        <Logo />
        <Title text="Enregistrement d'équipe" size='72' color='black'/>
      </motion.div>
    </SideDiv>
    <InputContainer>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>

    </InputContainer>
    </Header>
    </motion.div>
    <Footer />
    </>
  )
}


export default TeamCreation