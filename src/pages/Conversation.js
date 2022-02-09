import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { UserContext } from '../contexts/UserContext'

import { getConversation } from '../api/conversation'
import { getUserByID } from '../api/user'

import moment from "moment"
import 'moment/locale/fr'

import styled from 'styled-components'
import { motion } from "framer-motion"
import blur from '../images/blur.png'
import backgroundImage from '../images/conversation-background.jpg'
import { MdOutlineAnnouncement } from 'react-icons/md'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

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
const Middle = styled.div`
  background-color: black;
  padding: 0 25%;
`
const ConversationDiv = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 800px;
`
const MessagesTextSender = styled.div`
  overflow-wrap: break-word;
  background-color: teal;
  padding: 1% 2%;
  border-radius: 15px 5px 15px 5px;
`
const MessagesTextReceiver = styled.div`
  overflow-wrap: break-word;
  background-color: #554348;
  padding: 1% 2%;
  border-radius: 5px 15px 5px 15px;
`
const UserInfosSeparator = styled.div`
  border-top : 1px solid rgba(255, 229, 147, 0.253);
`
const SummonerName = styled.div`
  font-family: GrechenFuemen;
  font-size: 20px;
  a {
    text-decoration: none;
  }
`
const DateTime = styled.div`
  font-size: 13px;
  color: gray;
`

const Conversation = () => {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const [conversation, setConversation] = useState(null)
  const [profile, setProfile] = useState(null)
  const [newMessage, setNewMessage] = useState(null)
  const [sended, setIsSended] = useState(false)

  useEffect(() => {
    fetchConversation()
    setIsSended(false)
  },[id, sended])

  const fetchConversation = async () => {
    const conversation = await getConversation(user._id, id)
    setConversation(conversation)

    const profile = await getUserByID(id)
    setProfile(profile)
  }

  const handleTextarea = (e) => {
    setNewMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()    
    sendMessage()
  }

  const sendMessage = async () => {
    await fetch(`http://localhost:5000/messages`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        text : newMessage,
        sender : user._id,
        receiver : profile._id,
        conversation: conversation._id
      })
    })
    setIsSended(true)
  }

  if(!profile || !conversation ) {
    return <h1>Chargement...</h1>
  }

  // console.log(newMessage)
  // console.log(profile)
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
                <Title text="Conversation" size='64'/>
              </motion.div>
            </LogoTitle>
          <Separator />
        </Header>
        <Middle>
          <div className='container'>
            <div className='row d-flex align-items-center conversation' >
              <div className='col-1'>
                <MdOutlineAnnouncement/> 
              </div>
              <div className='col-2'>
                Conversation avec {profile.username}
              </div>
              <div className='col-8'>
                <UserInfosSeparator/>
              </div>
            </div>
            <ConversationDiv>
              {conversation.messages.map((element, index) =>
                <div 
                  key={index} 
                  className='row d-flex align-items-center overflow-auto'
                >
                  {element.sender === user._id ?
                    <>
                      <div className='col-1 my-1 py-2'>
                        <Link to={`/user/${user._id}`} className='my-1'>
                          <img 
                            src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${user.summoner_infos.profileIconId}.png`} 
                            alt="Person" 
                            className="img-fluid rounded-circle animate__animated animate__bounce" 
                          />
                        </Link>
                      </div>
                      <div className='col-10 my-1 py-2'>
                        <SummonerName>
                          <Link to={`/user/${user._id}`} className='my-1 underline'>{user.summoner_name}</Link>
                        </SummonerName>
                        <MessagesTextSender>
                          {element.text}
                        </MessagesTextSender>
                        <DateTime>Envoyé le {moment(element.createdAt).format('lll')}</DateTime>
                      </div>
                    </>
                  :
                    <>
                      <div className='col-10 my-1 py-2 text-end'>
                        <SummonerName>
                          <Link to={`/user/${profile._id}`} className='my-1 underline'>{profile.summoner_name}</Link>
                        </SummonerName>
                        <MessagesTextReceiver>
                          {element.text}
                        </MessagesTextReceiver>
                        <DateTime>Posté le {moment(element.createdAt).format('lll')}</DateTime>
                      </div>
                      <div className='col-1 my-1 py-2'>
                        <Link to={`/user/${profile._id}`} className='my-1'>
                        <img 
                          src={`https://ddragon.leagueoflegends.com/cdn/12.3.1/img/profileicon/${profile.summoner_infos.profileIconId}.png`} 
                          alt="Person" 
                          className="img-fluid rounded-circle animate__animated animate__bounce" 
                        />
                        </Link>
                      </div>
                    </>
                  }
                </div>
              )}
            </ConversationDiv>
            <div className='row conversationTextArea'>
              <div className='col-12'>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating">
                    <textarea 
                      className="form-control" 
                      placeholder="Leave a comment here" 
                      id="floatingTextarea2" 
                      style={{height:"100px"}}
                      onChange={handleTextarea}
                    />
                    <label htmlFor="floatingTextarea2">Annonce</label>
                    <div className='text-end'>
                      <button className="btn draw-border">Valider</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Middle>
        <Footer />
      </motion.div>
    </>
  )
}

export default Conversation