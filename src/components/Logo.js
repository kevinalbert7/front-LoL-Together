import React from 'react'

import logo from '../images/logo.png'

import styled from 'styled-components'

const LogoDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  img {
    height: 130px;
  }
`

const Logo = () => {
  return (
    <LogoDiv justifyContent className='animate__animated animate__backInDown'>
      <img src={`${logo}`} alt='LoL Together' />
    </LogoDiv>
  )
}

export default Logo