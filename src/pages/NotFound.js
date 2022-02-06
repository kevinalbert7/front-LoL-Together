import React from 'react'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Logo from '../components/Logo'
import Title from '../components/Title'
import Footer from '../components/Footer'

const Header = styled.div`
  background-image: url();
  background-color: black;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const NotFound = () => {
  return (
    <>
      <Nav />
      <Header>
          <Logo />
          <Title text="Page Not Found" size='72'/>
      </Header>
      <Footer />
    </>
  )
}

export default NotFound