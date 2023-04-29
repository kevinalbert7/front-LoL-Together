import React from 'react'

import logo from '../images/logo.png'

import styled from 'styled-components'

const LogoDiv = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  padding: ${props => props.padding};

  img {
    height: ${props => props.height || "130px"};
  }
`

const Logo = ({ height, padding }) => {
  return (
    <LogoDiv justifyContent className='animate__animated animate__backInDown' height={height} padding={padding}>
      <img src={`${logo}`} alt='LoL Together' />
    </LogoDiv>
  )
}

export default Logo