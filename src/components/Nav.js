import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

import { UserContext } from '../contexts/UserContext'

const MenuBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
      color : teal;
    }
  }
  button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
  }
`
const Bonjour = styled.div`
  font-size : 42%;
  letter-spacing: 1px;
`
const Account = styled.div`
  font-size : 58%;
`

const Nav = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  const handleLogoutClick = () => {
    fetch('http://localhost:5000/auth/logout', {
      method: 'delete',
      credentials: 'include'
    })
      .then(response => {
        setUser("")
        navigate('/')
      })
  }

  return (
      <MenuBackground>
        <Menu>
            <MenuLeft>
              <MenuItem>
                <Link to="/" >
                  <div className='underline'>Accueil</div>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/users">
                <div className='underline'>Joueurs</div>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/teams">
                <div className='underline'>Equipes</div>
                </Link>
              </MenuItem>
            </MenuLeft>
            <MenuRight>
              {user ? 
                <>
                  <MenuItem>
                    <Link to={`/user/${user._id}`}>
                      <Bonjour>
                        Bonjour, {user.username}.
                      </Bonjour>
                      <Account>
                      <div className='underline'>Accéder à votre compte.</div>
                      </Account>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button 
                      type="button" 
                      className=""
                      onClick={handleLogoutClick}
                    >
                      <div className='underline'>Déconnexion</div>
                    </button>
                  </MenuItem>
                </>
              :
                <>
                  <MenuItem>
                    <Link to="/login">
                    <div className='underline'>Connexion</div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup">
                    <div className='underline'>Inscription</div>
                    </Link>
                  </MenuItem>
                </>
              }
            </MenuRight>
        </Menu>
      </MenuBackground>
  )
}

export default Nav