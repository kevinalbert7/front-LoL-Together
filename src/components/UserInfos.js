import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'
import { ProfileContext } from '../contexts/ProfileContent'

import moment from "moment"
import 'moment/locale/fr'

import styled from 'styled-components'
import MyVerticallyCenteredModal from './Modal'
import { 
  MdOutlineAnnouncement, 
  MdOutlineDescription, 
  MdOutlineInfo, 
  MdOutlineEventAvailable, 
  MdLanguage 
} from 'react-icons/md'
import { RiUserLine, RiTeamLine, RiDiscordLine, RiPencilLine } from 'react-icons/ri'
import { FaLanguage } from 'react-icons/fa'

const Announcements = styled.div`
  margin : 5% 0;
`
const UserInfosSeparator = styled.div`
  border-top : 1px solid rgba(255, 229, 147, 0.253);
`
const DateTime = styled.div`
  font-size: 13px;
  color: gray;
`
const IconStyle = {
  color : "teal"
} 

const UserInfos = () => {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const { profile } = useContext(ProfileContext)
  const [modalParam, setModalParam] = useState(null)
  const [modalShow, setModalShow] = useState(false)

  const handleModal = (param) => {
    setModalShow(true)
    setModalParam(param)
  }

  // console.log(profile)
  return ( 
    <>
      <div className='row d-flex py-2 align-items-center userinfos'>
        <div className='col-1'>
          <MdOutlineInfo/> 
        </div>
        <div className='col-2'>
          Informations
        </div>
        <div className='col-8'>
          <UserInfosSeparator/>
        </div>
        <div className='col-1 cursor-pointer'>
          <RiPencilLine onClick={() => handleModal("editProfile")}/> 
        </div>
      </div>
      <div className='col-4 my-1'>
        <MdOutlineEventAvailable style={IconStyle}/> Disponibilités : {profile.disponibilities.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <FaLanguage style={IconStyle}/> Langue(s) parlé(s) : {profile.languages.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <MdLanguage style={IconStyle}/> Region : {profile.region}
      </div>
      <div className='col-4 my-1'>
        <RiUserLine style={IconStyle}/> Rôle(s) : {profile.roles.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <RiTeamLine style={IconStyle}/> Team(s) : {
          profile.teams.map((element, index, {length} ) => {           
            return length - 1 !== index ? 
            <Link 
              key={index}
              to={`/team/${element._id}`}>{element.name},
            </Link>
            : 
            <Link 
              key={index}
              to="/">{element.name}
            </Link>
        })}
      </div>
      <div className='col-4 my-1'>
        <RiDiscordLine style={IconStyle}/> Discord : {profile.discord ? "Oui" : "Indisponible"}
      </div>
      <div className='col-12 my-2 py-1 '>
        <div className='row d-flex py-2 align-items-center userinfos'>
          <div className='col-1'>
            <MdOutlineDescription/> 
          </div>
          <div className='col-2'>
            Description
          </div>
          <div className='col-8'>
            <UserInfosSeparator/>
          </div>
          <div className='col-1 cursor-pointer'>
            <RiPencilLine onClick={() => handleModal("editDescription")}/> 
          </div>
        </div>
        {profile.description}
      </div>
      <Announcements>
        <div className='row d-flex align-items-center userinfos'>
          <div className='col-1'>
            <MdOutlineAnnouncement/> 
          </div>
          <div className='col-2'>
            Annonces
          </div>
          <div className='col-8'>
            <UserInfosSeparator/>
          </div>
          {user._id === id && 
            <div className='col-1 cursor-pointer'>
              <RiPencilLine onClick={() => handleModal("createAnnoucement")}/> 
            </div>
          }
        </div>
        {profile.announcements.map((element, index, {length}) => (   
          length - 1 !== index ? (
            <div
              key={element._id} 
              className='col-12 my-1 py-2 borderBottom'
            >
              <DateTime>Posté le {moment(element.createdAt).format('lll')}</DateTime>
              {element.text}
            </div>
          ) : (
            <div
              key={element._id} 
              className='col-12 my-1 py-1 '
            >
              <DateTime>Posté le {moment(element.createdAt).format('lll')}</DateTime>
              {element.text}
            </div>
          )))}
      </Announcements>
      <MyVerticallyCenteredModal
        modalparam={modalParam}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default UserInfos