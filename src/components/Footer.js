import React from 'react'
import { RiTwitterLine, RiFacebookLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri'

import styled from 'styled-components'

import GridFooter from './GridFooter'
import Title from './Title'

const FooterBackground = styled.div`
  background-color: black;
  padding: 3%;
`
const FooterBackgroundRow = styled.div`
  display: flex;
  justify-content: space-around;
`

const Footer = () => {
  return (
    <FooterBackground>
      <FooterBackgroundRow>
        <GridFooter title="Joueur" text1="Créez votre compte" text2="Rechercher des équipes" />
        <GridFooter title="Equipe" text1="Créez votre équipe" text2="Rechercher des joueurs" />
        <GridFooter title="Ressources" text1="Conditions d'utilisations" text2="Contact" />
      </FooterBackgroundRow>
      <div className='d-flex align-items-center my-5 flex-column'>
        <Title text='Made by LoL Together Team' size='18' />
        <div className='d-flex justify-content-center my-3'>
          <RiTwitterLine  color="white" size="3%"/>
          <RiFacebookLine  color="white" size="3%"/>
          <RiInstagramLine  color="white" size="3%"/>
          <RiGithubLine  color="white" size="3%"/>
        </div>
      </div>
    </FooterBackground>
  )
}

export default Footer