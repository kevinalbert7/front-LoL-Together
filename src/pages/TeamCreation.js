import React, { useState, useEffect, useContext } from 'react'
import { MultiSelect } from "react-multi-select-component"
import Select from 'react-select'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from "framer-motion"
import styled from 'styled-components'
import { ProfileContext } from '../contexts/ProfileContent'

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

const Header = styled.div`
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
    height: 130vh;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
`
const SideDiv = styled.div`
    font-size: 20px;
    .p2 {
        font-size: 15px;
    }
    @media (max-width: 767px) {
        padding-top: 150px;
    }
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 400px;
    padding-top: 150px;
    font-size: 20px;
    font-weight: 800;
    .form-label {
        margin-top: 18px;
    }
    .btn {
        width: 400px;
        display: flex;
        flex-direction: column;
    }
    .btnSubscribe {
        border: 1px solid #f1f1f1;
        border-radius: 5px;
        outline: none;
        background: transparent;
        font-size: 30px;
        padding: 5px;
        widt: 300px;
        color: #f1f1f1;
        cursor: pointer;
        margin: 20px 0;
    }
    .btnSubscribe:hover {
        transition: all 0.3s ease-in-out;
        background: #f1f1f1;
        color: #333;
    }
    @media (max-width: 767px) {
        padding-top: 50px;
    }
`
const SelectStyled = styled.div`
`

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
        console.log("hhhh", dataRegion)
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

    console.log("value :",formik.values)
    console.log("languages :",selectedLanguages)
    console.log("région:",selectedRegion)
    console.log("dispo:",selectedDisponiblities)

  return (
    <>
        <Nav />
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header>
                <div className="container ">
                    <div className="row">

                        <div className="col-xxl col-md-6 d-flex justify-content-center align-items-center">
                            <SideDiv>
                                <motion.div
                                    style={{ x: -100 }} 
                                    animate={{ x: 0 }} 
                                    >
                                    <Logo />
                                    <Title text="Création d'équipe" size='60' color='black'/>
                                </motion.div>
                            </SideDiv>
                        </div>

                        <div className="col-xxl col-md-6 d-flex justify-content-center align-items-center">
                            <InputContainer>

                                <form onSubmit={formik.handleSubmit}>
                                    <label className="form-label">Nom d'équipe</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control shadow"
                                        style={{ height: '52px' }}
                                        placeholder="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />

                                    <label className="form-label">Région</label>
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

                                    <label className="form-label ">Langue</label>
                                    <SelectStyled>
                                        <MultiSelect
                                            className="form-control shadow "
                                            options={optionsLanguages}
                                            value={selectedLanguages}
                                            onChange={setSelectedLanguages}
                                            labelledBy="Select"
                                            hasSelectAll={false}
                                    />
                                    </SelectStyled>

                                    <label className="form-label">Disponiblitiés</label>
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
                                    
                                    <div className="btn">
                                        <button type="submit" className="btnSubscribe">Inscription</button>
                                        <Link to="/login">            
                                            Vous n'avez pas de compte? Inscrivez-vous!
                                        </Link>               
                                    </div>

                                </form>

                            </InputContainer>
                        </div>

                    </div>
                </div>
            </Header>
        </motion.div>
        <Footer />
    </>
  )
}


export default TeamCreation