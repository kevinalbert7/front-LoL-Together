import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { UserContext } from "../contexts/UserContext";

const NavContainer = styled.div`
  height: ${(props) => props.height || "60px"};
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const LinkStyle = styled.div`
  a {
    text-decoration: none;
    font-size: clamp(1.125rem, 0.9286rem + 0.9821vw, 2.5rem);
    color: #ffffff;
    padding: 0 17px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  cursor: pointer;
  display: none;
  display: none;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 2px;
  background-color: #ffffff;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    top: -8px;
    left: 0;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    top: 8px;
    left: 0;
  }
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: none;
  color: white;
`;

const Text = styled.div`
  font-size: 24px;
`;

const Nav = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleLogoutClick = () => {
    fetch("http://localhost:5000/auth/logout", {
      method: "delete",
      credentials: "include",
    }).then((response) => {
      setUser("");
      navigate("/");
    });
  };

  return (
    <NavContainer height={isOpen && "300px"}>
      <HamburgerMenu onClick={toggleMenu}>
        <Line />
      </HamburgerMenu>
      <LeftSide>
        <LinkStyle>
          <Link to="/">Accueil</Link>
          <Link to="/users">Joueurs</Link>
          <Link to="/teams">Equipes</Link>
          <Link to="/announcements">Annonces</Link>
        </LinkStyle>
      </LeftSide>
      <RightSide>
        <LinkStyle>
          {user ? (
            <>
              <Text>Bonjour, {user.username}!</Text>
              <Link to={`/user/${user._id}`}>Accéder à votre compte</Link>
              <Button onClick={handleLogoutClick}>Déconnexion</Button>
            </>
          ) : (
            <>
              <Link to="/login">Connexion</Link>
              <Link to="/signup">Inscription</Link>
            </>
          )}
        </LinkStyle>
      </RightSide>
    </NavContainer>
  );
};

export default Nav;
