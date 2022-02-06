import React, { useContext, useEffect, useState } from 'react'

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

const UserInfos = ({ userprofile }) => {
  let teamArray = []
  const [modalParam, setModalParam] = useState(null)
  const [modalShow, setModalShow] = useState(false)

  userprofile.teams.map(element => 
    teamArray = [ ...teamArray, element.name ]
  )

  const handleModal = (param) => {
    setModalShow(true)
    setModalParam(param)
  }

  console.log(userprofile)
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
          <RiPencilLine onClick={() => handleModal("editprofile")}/> 
        </div>
      </div>
      <div className='col-4 my-1'>
        <MdOutlineEventAvailable style={IconStyle}/> Disponibilités : {userprofile.disponibilities.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <FaLanguage style={IconStyle}/> Langue(s) parlé(s) : {userprofile.languages.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <MdLanguage style={IconStyle}/> Region : {userprofile.region}
      </div>
      <div className='col-4 my-1'>
        <RiUserLine style={IconStyle}/> Rôle(s) : {userprofile.roles.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <RiTeamLine style={IconStyle}/> Team(s) : {teamArray.join(', ')}
      </div>
      <div className='col-4 my-1'>
        <RiDiscordLine style={IconStyle}/> Discord : {userprofile.discord ? "Oui" : "Indisponible"}
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
            <RiPencilLine onClick={() => setModalShow(true)}/> 
          </div>
        </div>
        {userprofile.description}
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
          <div className='col-1 cursor-pointer'>
            <RiPencilLine onClick={() => setModalShow(true)}/> 
          </div>
        </div>
        {userprofile.announcements.map((element, index, {length}) => (   
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