import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getUserByID } from '../api/user'
import { getLolProfile, getLolStats } from '../api/lolinfos' 
import { getEmblem } from '../api/emblem'

import { UserContext } from '../contexts/UserContext'
import { ProfileContext } from '../contexts/ProfileContent'

import '../UserProfile.css'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { RiTwitterLine, RiFacebookLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import UserInfos from '../components/UserInfos'
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
const Emblem = styled.div`
  text-align : center;
  margin : 0 0 5% 0;
  img {
   width: 30%;
  }
`
const SocialIcons = styled.div`
  margin: 5%;
  text-align: center;
`
const Username = styled.div`
  font-size: 24px;
  margin-top: 3%;
  color: gray;
`
const Middle = styled.div`
  background-color: black;
  padding: 0 5%;
`

const IconStyle = {
  color: "linear-gradient(45deg, #050b3b, teal)"
}

const UserProfile = () => {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const { profile, setProfile } = useContext(ProfileContext)
  const navigate = useNavigate()
  const [emblem, setEmblem] = useState(null)
  // const [userProfile, setUserProfile] = useState(null)
  const [lolProfile, setLolProfile] = useState(null)
  const [lolStats, setLolStats] = useState(null)

  useEffect(() => {
    fetchUser()
  },[id, user])

  const fetchUser = async () =>{

    const profile = await getUserByID(id)
    setProfile(profile)

    const lolProfile = await getLolProfile(profile.summoner_name)
    setLolProfile(lolProfile)

    const lolStats = await getLolStats(lolProfile.id)
    setLolStats(lolStats)

    if (lolStats.length !== 0 ) { 
      const userEmblem = getEmblem(lolStats[1].tier)
      setEmblem(userEmblem) 
    }
  }

  if(!profile || !lolProfile || !lolStats) {
    return <h1>Chargement...</h1>
  }


  // console.log("userprofile", profile)
  // console.log("lolProfile", lolProfile)
  // console.log("lolStats", lolStats)
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
                <Title text={`${profile.summoner_name}`} size='64'/>
              </motion.div>
            </LogoTitle>
          <Separator />
        </Header>
        <Middle>
          <div className='container'>
            <div className='row'>
              <div className='col-3'>
                <div className="cardProfile">
                  <img 
                    src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${lolProfile.profileIconId}.png`} 
                    alt="Person" 
                    className="card__image animate__animated animate__bounce" 
                  />
                  <Username>
                    {profile.username}
                  </Username>
                  <p className="card__name">{profile.summoner_name}</p>
                  <p>{lolStats.length !== 0  && lolStats[1].tier} {lolStats.length !== 0 && lolStats[1].rank}</p>
                  {emblem ? 
                    <Emblem>
                      <img src={`${emblem}`} /> 
                    </Emblem>
                  :
                    <div className='mx-5 fw-bold'>
                      Not Ranked
                    </div>
                  }
                  <p>Lvl : {lolProfile.summonerLevel}</p>
                  <div className="grid-container">
                    <div className="grid-child-posts">
                      {lolStats.length !== 0  && lolStats[1].wins} {lolStats.length !== 0  && "Wins"}
                    </div>
                    <div className="grid-child-followers">
                      {lolStats.length !== 0  && lolStats[1].losses} {lolStats.length !== 0  && "Loses"}
                    </div>
                  </div>
                  <SocialIcons>
                    <a href="#"><RiTwitterLine  style={IconStyle} size="15%"/></a>
                    <a href="#"><RiFacebookLine  style={IconStyle} size="15%"/></a>
                    <a href="#"><RiInstagramLine  style={IconStyle} size="15%"/></a>
                    <a href="#"><RiGithubLine  style={IconStyle} size="15%"/></a>
                  </SocialIcons>
                  <button className="btn draw-border">Ajouter</button>
                  <button className="btn draw-border">Contacter</button>
                </div>
              </div>
              <div className='col-9'>
                <div className='row'>
                  <UserInfos />
                </div>
              </div>
            </div>
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default UserProfile