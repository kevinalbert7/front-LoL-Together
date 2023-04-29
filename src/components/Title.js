import React from 'react'

import styled from 'styled-components'

const TitleDiv = styled.div`
  font-family: GrechenFuemen;
  font-style: normal;
  font-weight: normal;
  text-align: left;
  text-align: center;
  font-size: ${props => props.size || "64px"};
`

const Title = (props) => {
  const { text, size } = props
  return (
    <TitleDiv size={size} className='animate__animated animate__bounceInRight' >
      {text}
    </TitleDiv>
  )
}

export default Title