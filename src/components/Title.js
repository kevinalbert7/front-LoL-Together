import React from 'react'

import styled from 'styled-components'

const TitleDiv = styled.div`
  font-family: GrechenFuemen;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${props => props.size}px;
`

const Title = (props) => {
  const { text, size } = props
  return (
    <TitleDiv size={size} >
      {text}
    </TitleDiv>
  )
}

export default Title