import React, { useState, useEffect, useContext } from 'react'
import { MultiSelect } from "react-multi-select-component"
import Select from 'react-select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import styled from 'styled-components'
import { ProfileContext } from '../contexts/ProfileContent'
import { Link } from 'react-router-dom'

import { 
    getRegion, 
    getLanguages, 
    getSelectedInfos, 
    getValues, 
    optionsRegions, 
    optionsRoles, 
    optionsDisponiblities 
  } from '../api/filter'

import backgroundImage from '../images/teamSignup-background.jpg'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Button from '../components/Button'


const Header = styled.div`
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
    height: 115vh;
    padding: 200x;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 150px 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const SideDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 100px;
    width: 30%;
    .p2 {
        font-size: 15px;
    }
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    font-size: 20px;
    font-weight: 800;
    input {
        width: 300px;
    }
`
const SelectStyled = styled.div`
    height: 60px;
    width: 300px;
`
// const Button2 = styled.button`
//     padding: 25px 80px;
//     text-color: black;
// `


const TeamCreation = () => {
    const navigate = useNavigate()
    const { profile, setProfile } = useContext(ProfileContext)
    const [optionsRegion, setOptionsRegion] = useState([])
    const [selectedRegion, setSelectedRegion] = useState([])
    const [optionsLanguages, setOptionsLanguages] = useState([{}])
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [selectedDisponiblities, setSelectedDisponiblities] = useState([])

    useEffect( async () => {
        setSelectedRegion([{ label: profile.region, value: profile.region }])
        const dataRegion = await getRegion()
        setOptionsRegion(dataRegion)
        const dataLanguages = await getLanguages()
        setOptionsLanguages(dataLanguages)
        const userLanguages = getSelectedInfos(profile.languages)
        setSelectedLanguages(userLanguages)
        const userDisponibilities = getSelectedInfos(profile.disponibilities)
        setSelectedDisponiblities(userDisponibilities)
    },[])

    const formik = useFormik({
        initialValues: {
        name: "",
        },
        onSubmit: values => {
        signup(values)
        },
        validateOnChange: false,
        validationSchema: Yup.object({
          name: Yup.string()
            .required("Un nom de team est requis"),

        })
    })

    const signup = async values => {
        const signupResponse = await fetch('http://localhost:5000/teams', {
            method: 'post',
            headers: {
            'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                name: values.name
            })
        })

        const team = await signupResponse.json()

        if (team.error) {
            alert(team.error)
            return
        }

        navigate('/team')
    }

    console.log(formik.values)
    console.log(selectedLanguages)
    console.log(selectedRegion)
    console.log(selectedDisponiblities)

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
                    <Title text="Enregistrement d'équipe" size='60' color='black'/>
                </motion.div>
            </SideDiv>

            <InputContainer>
                <form onSubmit={formik.handleSubmit}>
                    <p>Nom d'équipe :</p>
                    <input
                        name="name"
                        type="text"
                        className="form-control shadow" 
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />

                    <p>Modifier votre région :</p>
                    <SelectStyled>
                        <Select
                        className="form-control shadow"
                        value={selectedRegion}
                        options={optionsRegions} 
                        onChange={setSelectedRegion}
                        />
                        {/* <MultiSelect
                        options={optionsRegion}
                        value={selectedRegion}
                        onChange={setSelectedRegion}
                        labelledBy="Select"
                        hasSelectAll={false}
                        /> */}
                    </SelectStyled>

                    <p>Choisissez votre langue :</p>
                    <SelectStyled>
                        <MultiSelect
                        className="form-control shadow"
                        options={optionsLanguages}
                        value={selectedLanguages}
                        onChange={setSelectedLanguages}
                        labelledBy="Select"
                        hasSelectAll={false}
                        />
                    </SelectStyled>

                    <p>Indiquer vos disponiblitiés :</p>
                    <SelectStyled>
                        <MultiSelect
                        className="form-control shadow"
                        options={optionsDisponiblities}
                        value={selectedDisponiblities}
                        onChange={setSelectedDisponiblities}
                        labelledBy="Select"
                        hasSelectAll={false}
                        />
                    </SelectStyled>

                    <Button type="submit" text="Inscription"/>
                    {/* <Button2><button>Insciption</button></Button2> */}
                </form>

                <Link to="/login">                    
                    Vous n'avez pas de compte? Inscrivez-vous!
                </Link>               
            </InputContainer>
        </Header>
    </motion.div>
    <Footer />
    </>
  )
}


export default TeamCreation