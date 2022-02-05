import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import Nav from '../components/Nav'
// import Separator from '../components/Separator'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

// import blur from '../images/blur.png'
import backgroundImage from '../images/team-background.png'

const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 30%), url(${backgroundImage});
  height: 150vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  // background: linear-gradient(to top, #333, rgba(0, 0, 0, 0) 30%);
`
const LogoContainer = styled.div`
  top: 100px;
  left: 100px;
  position: absolute;
`
const TitleContainer = styled.div`
  position: absolute;
  top: 150px;
`
const Card =styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 200px;
  padding: 50px;
  margin: 150px auto 0 ;
  background-color: rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  width: 75vw;
  color: black;
  .logo {
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    position: absolute;
    top: -50px;
  }
`
// const Leader = styled.div`
//   display: flex;
//   justify-content: center;
//   top: 100px;
// `
// const TeamLogo = styled.div`
//   height: 40px;
//   position: absolute;
//   border: 3px solid white;  
// `



const TeamProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [teamProfile, setTeamProfile] = useState(null)

  useEffect(() => {
    getProfile()
  },[id])

  const getProfile = async () =>{
    
    const response = await fetch(`http://localhost:5000/teams/${id}`, {
      credentials: "include"
    })
    const data = await response.json()
    if (data.error) {
        navigate('/login')
      } else {
        setTeamProfile(data)
      }
  }
  
  console.log("team", teamProfile)
  return (
    <>
      <Nav />
      <Header>
        <TitleContainer>
          <Title text="TEAM NAME" size='72'/>
        </TitleContainer>
        <Card>
          <div className='logo'>LOGO</div>
          <div className='container'>

            <div className='row '>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Region</div>
              </div>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Grade</div>
              </div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'></div>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Role</div>
              </div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Disponibilities</div>
              </div>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Members</div>
              </div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div class="p-3 border bg-light opacity-25">Description</div>
              </div>

            </div>
          </div>
          {/* <Leader>{teamProfile.leader_id}</Leader> */}
        </Card>        
        <LogoContainer>
          <Logo/>
        </LogoContainer>
        {/* <Separator /> */}
      </Header>
      {/* <Middle> */}
      {/* </Middle> */}
        {/* <Description>{teamProfile.description}</Description>  */}
        <Footer />
    </>
  )
}

export default TeamProfile







{/* <Card className='container'>
  <div className='row justify-content-md-center'>
    <div class="col col-lg-2">
    </div>
    <div class="col-md-auto">
      Leader
    </div>
    <div class="col col-lg-2">
    </div>
  </div>
    <Region>Region</Region>
    <Disponibilities>Disponibilities</Disponibilities>
    <Grade>Grade</Grade>
    <Roles>Roles</Roles>
    <Members>Members</Members>
</Card> */}