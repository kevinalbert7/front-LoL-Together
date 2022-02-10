import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Title from './Title'

const Grid = styled.div`
  text-align: left;
  padding: 5px 0;
  text-align: center;
  p {
    margin-top: 20px;
  }
  p::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background: #000;
    transform: scale(0;
    transition: transform 0.2s ease-in-out;
  }
  p::hover::after {
    transform: scale(1);
  }
  .linkFooter {
    margin-top: 40px;
  }
`

const GridFooter = (props) => {
  const { title, text1, text2, link1, link2 } = props
  return (
    <Grid>
      <Title text={title} size='36'/>
      <div className="linkFooter">
        <Link to={link1}><p>{text1}</p></Link>
        <Link to={link2}><p>{text2}</p></Link>
      </div>      
    </Grid>
  )
}

export default GridFooter