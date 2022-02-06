import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import backgroundImage from '../images/policy-background.png'


const Header = styled.div`
    height: 65vh;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
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

const TeamCreation = () => {
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
                    <Title text="Création d'équipe" size='64'/>
                </motion.div>
            </LogoTitle>
            </Header>
            <Footer />  
        </>
    )
}

export default TeamCreation