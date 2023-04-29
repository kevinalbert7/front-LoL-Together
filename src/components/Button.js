import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
  padding: ${props => props.padding || "0"};
`

const Button = ({ text, padding }) => {
  return (
       <Btn type="submit" className="btn btn-dark" padding={padding}>{text}</Btn>
  )
}

export default Button