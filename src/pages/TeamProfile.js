import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import moment from 'moment'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
// import Separator from '../components/Separator'

// import blur from '../images/blur.png'
import backgroundImage from '../images/team-background.png'
import { RiFontSize } from 'react-icons/ri'

const Header = styled.div`
height: 150vh;
background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
align-items: center;
flex-direction: column;
postion: absolute;
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
  width: 75vw;
  padding: 50px;
  display: flex;
  justify-content: center;
  margin: 150px auto;
  background-color: rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  color: black;
  position: absolute;
  top: 200px;
  .teamLogo {
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    color: white;
    position: absolute;
    top: -50px;
  }
  .contenu {
    margin-bottom: 10px;
  }
  .title {
    margin-bottom: 10px;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .annonces {
    margin-top: 30px;
    margin-left: 30px;
    color: white;
    font-size: 25px;
  }
  .teamDate {
    margin-left: 30px;
    font-size: 10px;
    color: black;
  }
`

// const TeamLogo = styled.div`
//   height: 100px;
//   width: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 3px solid rgba(0, 0, 0, 0.3);
//   border-radius: 50%;
//   background-image: url("${props => props.teamLogo}");
//   color: white;
//   position: absolute;
//   top: -50px;
// `
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
  
  if(!teamProfile) {
    return <h1>Chargement...</h1>
  }
  
  console.log("team", teamProfile)
  return (
    <>
      <Nav />

      <Header>

        <LogoContainer>
            <Logo/>
        </LogoContainer>

        <TitleContainer>
          <Title text={teamProfile.name} size='72'/>
        </TitleContainer>

      </Header>

        <Card>
          <div className='teamLogo' style={{ backgroundImage: `url("${teamProfile.logo}")` }}/>

          <div className='container'>
            <div className='row '>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light title">Membres :
                  <ul>
                    {teamProfile.users.map(user => (
                      <li>                     
                        <a href={`http://localhost:3000/user/${id}`}>{user.username}</a>
                      </li>
                    ))}
                  </ul>
                </div> 
              </div>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light">Rank :
                  <div className='contenu'>{teamProfile.rank}</div>
                </div>
              </div>
            </div>


            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light">Région :
                  <div className='contenu'>{teamProfile.region}</div>
                </div>
              </div>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light">Langues :
                  {teamProfile.languages.map(language => (
                    <p>{language}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light">Disponibilités :
                  <div className='contenu'>{teamProfile.rank}</div>
                </div>
              </div>
              <div className='col gx-5 gy-5'></div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light">Description :
                  <div className='contenu'>{teamProfile.description}</div>
                </div>
              </div>
            </div>

            <div className='annonces'>Annonces :</div>
            {teamProfile.announcements.map(announcement => (
              <div className='row'>
                <div className='col gx-5 gy-5'>
                  <div className="p-3 border rounded bg-dark text-light contenu">
                    <ul>
                      <li>
                        {announcement.text}
                      </li>
                    </ul>
                    <div className='teamDate'>Postée le {moment(teamProfile.updatedAt).format('lll')}</div>
                  </div>
                </div>
              </div>
              ))}
          </div>

        </Card>   

      

        <Footer />
    </>
  )
}

export default TeamProfile