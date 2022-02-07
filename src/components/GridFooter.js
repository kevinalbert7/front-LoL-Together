import React from 'react'

import styled from 'styled-components'

import Title from './Title'

const Grid = styled.div`
  text-align: left;
  padding: 5px 0;
  a {
    text-decoration: none;
    color: #FFF;
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin-top: 40px;
  }
`

const GridFooter = (props) => {
  const { title, text1, text2, link1, link2 } = props
  return (
    <Grid>
      <Title text={title} size='36'/>
      <a href={link1}><p>{text1}</p></a>
      <a href={link2}><p>{text2}</p></a>
    </Grid>
  )
}

export default GridFooter