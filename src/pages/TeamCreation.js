import React, { useState, useEffect, useContext } from 'react'
import { MultiSelect } from "react-multi-select-component"
import Select from 'react-select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

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
const SelectStyled = styled.div`
  color: black;
`

const TeamCreation = () => {
    const [optionsRegion, setOptionsRegion] = useState([])
    const [selectedRegion, setSelectedRegion] = useState([])
    const [optionsLanguages, setOptionsLanguages] = useState([])
    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [selectedDisponiblities, setSelectedDisponiblities] = useState([])

    // useEffect( async () => {
    //     setSelectedRegion([{ label: user.region, value: user.region }])
    //     const dataRegion = await getRegion()
    //     setOptionsRegion(dataRegion)
    //     const dataLanguages = await getLanguages()
    //     setOptionsLanguages(dataLanguages)
    //     const userLanguages = getSelectedInfos(user.languages)
    //     setSelectedLanguages(userLanguages)
    //     const userDisponibilities = getSelectedInfos(user.disponibilities)
    //     setSelectedDisponiblities(userDisponibilities)
    //     const userRoles = getSelectedInfos(user.roles)
    //     setSelectedRoles(userRoles)
    // },[])

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

        <p>Modifier votre région :</p>
        <SelectStyled>
            <Select 
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
            options={optionsDisponiblities}
            value={selectedDisponiblities}
            onChange={setSelectedDisponiblities}
            labelledBy="Select"
            hasSelectAll={false}
            />
        </SelectStyled>

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