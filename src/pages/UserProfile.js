import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import blur from '../images/blur.png'
import backgroundImage from '../images/profil-background.png'

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
const Separator = styled.div`
  background-image: url(${blur});
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
`
const Middle = styled.div`
  background-color: black;
  padding: 5%;
`

const UserProfile = () => {
  const { id } = useParams()
  const api_key = "RGAPI-185af702-858a-4302-b4d7-5a9dff310c98"
  const navigate = useNavigate()
  const [userProfile, setUserProfile] = useState(null)
  const [lolProfile, setLolProfile] = useState(null)
  const [lolStats, setLolStats] = useState(null)

  useEffect(() => {
    getProfile()
  },[id])

  const getProfile = async () =>{
    //recuperer le profil de mongo
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        setUserProfile(data)
    }

    //recuperer le profil de lol
    const LoL_Response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${data.summoner_name}?api_key=${api_key}`, {
    })
    const LoL_data = await LoL_Response.json()
    if (LoL_data.error) {
        navigate('/login')
      } else {
        setLolProfile(LoL_data)
    }

    //recuperer les stats de lol
    const LoL_Stats_Response = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${LoL_data.id}?api_key=${api_key}`, {
    })
    const LoL_Stats_data = await LoL_Stats_Response.json()
    if (LoL_Stats_data.error) {
        navigate('/login')
      } else {
        setLolStats(LoL_Stats_data)
    }

  }

  if(!userProfile || !lolProfile || !lolStats) {
    return <h1>Chargement...</h1>
  }

  console.log("userprofile", userProfile)
  console.log("lolProfile", lolProfile)
  console.log("lolStats", lolStats)
  return (
    <>
      <Nav />
      <Header>
        {/* <Logo /> */}
        {/* <Title text="zef" size='72'/> */}
        <Separator />
      </Header>
      <Middle>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img 
                src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${lolProfile.profileIconId}.png`} 
                alt='profileIcon'
                className='img-fluid'
              />
              {lolStats.map(element => element.tier)}
            </div>
            <div className='col-10'>
              {userProfile.email}
            </div>
          </div>
        </div>
      </Middle>
      <Footer />
    </>
  )
}

export default UserProfile