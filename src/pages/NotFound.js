import React from 'react'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

import blur from '../images/blur.png'

const Header = styled.div`
  background-image: url();
  background-color: black;
  height: 100vh;
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

const NotFound = () => {
  return (
    <>
      <Nav />
      <Header>
          <Logo />
          <Title text="Page Not Found" size='72'/>
      </Header>
      <Separator />
      <Footer />
    </>
  )
}

export default NotFound