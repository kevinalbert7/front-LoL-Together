import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import { UserContext } from "../contexts/UserContext";

const NavContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const LeftSide = styled.div``;

const RightSide = styled.div``;

const LinkStyle = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-size: 24px;
    color: #ffffff;
    padding: 0 17px;
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
    <NavContainer>
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
