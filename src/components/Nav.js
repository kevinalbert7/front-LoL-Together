import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: -webkit-sticky;
  position: sticky;
`
const MenuBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
`
const MenuLeft = styled.div`
  display: flex;  
`
const MenuRight = styled.div`
  display: flex;
`
const MenuItem = styled.div`
  margin: 0 20px;
  font-size: 24px;
  a {
    text-decoration: none;
    color: white;
    &:hover {
      color : purple;
    }
  }
`

const Nav = () => {
  return (
      <MenuBackground>
        <Menu>
            <MenuLeft>
              <MenuItem>
                <Link to="/">
                  Accueil
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  Joueurs
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  Equipes
                </Link>
              </MenuItem>
            </MenuLeft>
            <MenuRight>
              <MenuItem>
                <Link to="/">
                  Connexion
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">
                  Inscription
                </Link>
              </MenuItem>
            </MenuRight>
        </Menu>
      </MenuBackground>
  )
}

export default Nav