import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Logo from "../components/Logo";

import backgroundImage from "../assets/images/policy-background.png";

const Middle = styled.div`
  background-color: black;
  padding: 5%;
`;

const Teams = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const response = await fetch(`http://localhost:5000/teams/`, {
      credentials: "include",
    });
    const data = await response.json();
    if (data.error) {
      navigate("/login");
    } else {
      setTeams(data);
    }
  };

  return (
    <>
      <Nav />
      <Header background={`${backgroundImage}`} text="Liste des Equipes" left={<Logo />}/>
      <Middle>
        <div className="container">{/* Test */}</div>
      </Middle>
      <Footer />
    </>
  );
};

export default Teams;
