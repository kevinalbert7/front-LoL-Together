import React from 'react'

import styled from 'styled-components'

import Title from './Title'

const Grid = styled.div`
  padding: 5px 0;
`

const GridFooter = (props) => {
  const { title, text1, text2 } = props
  return (
    <Grid>
      <Title text={title} size='36'/>
      <p>{text1}</p>
      <p>{text2}</p>
    </Grid>
  )
}

export default GridFooter