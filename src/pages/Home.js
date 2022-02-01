import React from 'react'

import img from '../images/home-background.png'
import homeWave from '../images/home-wave.svg'
import { RiUserLine } from 'react-icons/ri';

import styled from 'styled-components'

import Nav from '../components/Nav'

const Discover = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HomeWave = styled.div`
  background-image: url(${homeWave});
  z-index: 2;
  min-width: 100%;
  max-width: 1440px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 270px;
`
const Middle = styled.div`
  background-color: #201226;
`

const Home = () => {  
  return (
    <>
      <Discover>
        <Nav />
        <HomeWave/>
      </Discover>
      <Middle>
        <div className='container'>
        <RiUserLine />

          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
          <p>TEST</p>
        </div>
      </Middle>
    </>
  )
}

export default Home