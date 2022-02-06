import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import backgroundImage from '../images/teamSignup-background.jpg'
import blur from '../images/blur.png'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'
// import Button from '../components/Button'

const Header = styled.div`
  background-image: url(${backgroundImage});
  height: 115vh;
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
const ErrorForm = styled.div`
  color: red;
  font-weight: bold;
  display: block;
`

const TeamCreation = () => {

  const navigate = useNavigate()
  // const { setUser } = useContext(UserContext)
  const [errorSignup, setErrorSignup] = useState(null)

  const formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      onSubmit: values => {
        console.log(values)
      },
      validationSchema: Yup.object().shape({
              email: Yup.string()
          .min(5, "Email trop court")
                  .email("Email invalid")
          .required("Email est requis"),
        password: Yup.string()
          .min(5, "Password trop court")
          .required("Password est requis")
      }),
          validateOnChange: false
  })

  const teamSignup = async values => {
    // fetch signup
    const signupResponse = await fetch('http://localhost:5000/teams', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: values.name,
      })
    })

    const user = await signupResponse.json()

    if (user.error) {
      setErrorSignup(user.error)
      return
      }
  }

  return (
    <>
      <Nav />
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
      >
          <Header>
          <SideDiv>
            <motion.div
            style={{ x: -100 }} 
            animate={{ x: 0 }} 
            >
            <Logo />
            <Title text="Enregistrement d'équipe" size='72'/>
            <ErrorForm>
                {errorSignup && errorSignup}
            </ErrorForm>

            </motion.div>
          </SideDiv>
          <Separator />
          </Header>
      </motion.div>
      <Footer />
    </>
  )
}

export default TeamCreation