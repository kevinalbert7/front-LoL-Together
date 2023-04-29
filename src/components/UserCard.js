import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { motion } from "framer-motion"

import { getLolProfile, getLolStats } from '../api/lolinfos'
import { getEmblem } from '../api/emblem'

const Emblem = styled.div`
  text-align : center;
  img {
   width: 15%;
  }
`

const Chargement = styled.div`
  text-align: center;
  font-size: clamp(16px, 16px + 0.362vw, 24px);
`

const UserCard = ({ id, username, summoner_name, discord, region, languages, disponibilities, roles }) => {
  const [notRanked, setNotRanked] = useState(null)
  const [emblem, setEmblem] = useState(null)
  const [lolProfile, setLolProfile] = useState(null)

  useEffect(() => {
      fetchLolProfile()
  }, [])

  
  const fetchLolProfile = async () => {
    try {
      const lolProfile = await getLolProfile(summoner_name)    
      setLolProfile(lolProfile)
      const lolStats = await getLolStats(lolProfile.id)
      const emblem = getEmblem(lolStats[1].tier)
      
      setEmblem(emblem)   
    } catch (error) {
      setNotRanked("Not Ranked")
    }
  }  
  if (!lolProfile) {
    return <Chargement>Chargement...</Chargement>
  }

  // console.log(roles.join(", "))
  return (
    <div className='col-xl-3 my-2 col-lg-4 col-md-6 col-sm d-flex justify-content-center'>
      <motion.div
        style={{ x: -100 }} 
        animate={{ x: 0 }} 
      >
        <div className="card" style={{ width: '265px' }}>
          <img                 
            src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${lolProfile.profileIconId}.png`} 
            className="card-img-top" 
            alt="profileicon" 
          />
          <div className="card-body text-color d-flex align-items-center ">
            <h5 className="card-title text-capitalize">{username}</h5>
            {emblem ? 
              <Emblem>
                <img src={`${emblem}`} /> 
              </Emblem>
            :
              <div className='mx-5 fw-bold'>
                {notRanked}
              </div>
            }
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Nom d'invocateur : <span className='fw-bold'>{summoner_name}</span></li>
            <li className="list-group-item">Rôles : <span className='fw-bold text-uppercase'>{roles.join(", ")}</span></li>
            <li className="list-group-item">Disponibilités : <span className='fw-bold text-capitalize'>{disponibilities.join(", ")}</span></li>
            <li className="list-group-item">Région : <span className='fw-bold'>{region}</span></li>
            <li className="list-group-item">Langue(s) parlée(s) : <span className='fw-bold text-capitalize'>{languages.join(", ")}</span></li>
            <li className="list-group-item">Discord : <span className='fw-bold'>{discord}</span></li>
          </ul>
          <div className="card-body text-end">
            <Link 
              to={`/user/${id}`} 
              className="text-dark card-link text-decoration-none underline">
              Voir plus...
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default UserCard