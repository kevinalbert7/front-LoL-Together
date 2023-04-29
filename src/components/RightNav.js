import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../contexts/UserContext";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;

  li {
    padding: 0 17px;
  }

  a {
    text-decoration: none;
    font-size: clamp(1.125rem, 0.9286rem + 0.9821vw, 2.5rem);
    color: #ffffff;
  }

  @media (max-width: 768px) {
    height: 100vh;
    width: 300px;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: red;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;

    li {
      padding: 10px 0;
    }
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

const RightNav = ({ open }) => {
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
    <Ul open={open}>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/users">Joueurs</Link>
      </li>
      <li>
        <Link to="/teams">Equipes</Link>
      </li>
      <li>
        <Link to="/announcements">Annonces</Link>
      </li>
      {user ? (
        <>
          <li>
            <Text>Bonjour, {user.username}!</Text>
          </li>
          <li>
            <Link to={`/user/${user._id}`}>Accéder à votre compte</Link>
          </li>
          <li>
            <Button onClick={handleLogoutClick}>Déconnexion</Button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/signup">Inscription</Link>
          </li>
        </>
      )}
    </Ul>
  );
};

export default RightNav;
