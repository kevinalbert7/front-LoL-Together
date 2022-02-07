import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/fr'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

import backgroundImage from '../images/team-background.png'

const Header = styled.div`
height: 50vh;
background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%), url(${backgroundImage});
background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
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
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 2%;
  color: black;
  // position: absolute;
  top: 200px;
  .teamLogo {
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    background-color: black;
    position: absolute;
    top: 264px;
  }
  .contenu {
    margin-bottom: 10px;
  }
  .title {
    margin-bottom: 10px;
  }
  ul{
    margin: 0;
  }
  li {
    margin: 0;
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
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 13px;
    color: grey;
  }
`

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
  
  // console.log("team", teamProfile)
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
                <div className="p-3 border rounded bg-dark text-light title"><p>Membres :</p>
                  <ul>
                    {teamProfile.users.map((user, index) => (
                      <li key={index}>                     
                        <a href={`http://localhost:3000/user/${id}`}>{user.username}</a>
                      </li>
                    ))}
                  </ul>
                </div> 
              </div>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light"><p>Rank :</p>
                  {teamProfile.rank}
                </div>
              </div>
            </div>


            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light"><p>Région :</p>
                  {teamProfile.region}
                </div>
              </div>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light"><p>Langues :</p>
                  <ul>
                    {teamProfile.users.map((user, index) => (
                      <li key={index}>   
                        {user.language}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light"><p>Disponibilités :</p>
                  <ul>
                    {teamProfile.users.map((user, index) => (
                      <li key={index}>   
                        {user.disponibilitie}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='col gx-5 gy-5'></div>
            </div>

            <div className='row'>
              <div className='col gx-5 gy-5'>
                <div className="p-3 border rounded bg-dark text-light"><p>Description :</p>
                  {teamProfile.description}
                </div>
              </div>
            </div>

            <div className='annonces'>Annonces :</div>
            {teamProfile.announcements.map((announcement, index) => (
              <div 
              key={index}
                className='row'
              >
                <div className='col gx-5 gy-5'>
                  <div className="p-3 border rounded bg-dark text-light contenu">
                    {announcement.text}
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