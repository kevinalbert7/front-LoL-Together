import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import backgroundImage from '../images/login-background.png'
import blur from '../images/blur.png'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button'

import { UserContext } from '../contexts/UserContext'

const Header = styled.div`
  background-image: url(${backgroundImage});
  height: 100vh;
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
  top: 20%;
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

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [errorLogin, setErrorLogin] = useState(null)

  const formik = useFormik({
    initialValues:{
      username: "Jong",
      password: "testtest"
    },
    onSubmit: values => {
      login(values)
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Le nom d'utilisateur est requis."),
      password: Yup.string()
        .required("Le mot de passe est requis.")
    })
  })

  const login = async values => {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(values)
    })

    if (response.status >= 400) {
    //   alert(response.statusText)
        setErrorLogin("Le nom d'utilisateur/mot de passe est incorrect.")
    } else {
        const data = await response.json()
        // console.log(data)
        setUser(data)
        setErrorLogin("")
        navigate('/')
    }
  }

  // console.log(user)  
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
            <Logo />
            <Title text="Connexion" size='72'/>
            <ErrorForm>
              {errorLogin && errorLogin}
            </ErrorForm>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 ">
                <label className="form-label">Nom d'utilisateur</label>
                <input 
                  type="text" 
                  className="form-control shadow" 
                  id="username"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  error={formik.errors.username}
                  />
                <ErrorForm>
                  {formik.errors.username}
                </ErrorForm>
              </div>
              <div className="mb-5">
                <label className="form-label">Mot de passe</label>
                <input 
                  type="password" 
                  className="form-control shadow" 
                  id="password"
                  name="password"
                  placeholder="Mot de passe"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.errors.password}
                  />
                <ErrorForm>
                  {formik.errors.password}
                </ErrorForm>
              </div>
              <div className='text-center'>
                <Button text="Se connecter" />
              </div>
            </form>
          </SideDiv>
          <Separator />
        </Header>
      </motion.div> 
      <Footer />
    </>
  )
}

export default Login