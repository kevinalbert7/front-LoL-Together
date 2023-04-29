import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { RiUserLine, RiTeamLine } from "react-icons/ri";
import Nav from "../components/Nav/Nav";
import Logo from "../components/Logo";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import backgroundImage from "../assets/images/home-background.png";

const PresentationContainer = styled.div`
  min-width: 70%;

  p:nth-child(2) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Discover = styled.a`
  font-family: GrechenFuemen;
  text-decoration: none;
  color: #ffffff;
  font-size: 72px;
`;
const Middle = styled.div`
  background-color: #000000;
  padding: 50px;
`;
const HomeCard = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Description = styled.div`
  margin: 20px;

  ul li {
    padding: 10px 0;
    font-size: 17px;
  }
`;
const Step = styled.div`
  border: 1px solid white;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Nav />
      <Header
        height="100vh"
        heightRight="100%"
        background={`${backgroundImage}`}
        backgroundPosition="top left"
        fontFamily="Open"
        size="36px"
        left={
          <Logo />
        }
        text={
          <PresentationContainer>
            <motion.div style={{ x: -100 }} animate={{ x: 0 }}>
              <p>Recrutes des joueurs pour ton équipe, ou fais-toi recruter.</p>
              <p>
                Parce que jouer ensemble c'est aussi passer de bons moments!
              </p>
              <Discover href="#description">Découvrir</Discover>
            </motion.div>
          </PresentationContainer>
        }
      />
      <Middle id="description">
        <div className="container">
          <motion.div style={{ x: -100 }} animate={{ x: 0 }}>
            <div className="row">
              <div className="col-10 mx-auto fs-4 text-center m-4">
                <Description>
                  Inscrivez-vous, et accédez à la base de données officielle de
                  League Of Legend pour trouver un joueur que vous pourrez
                  sélectionner grace à un système de filtre.
                </Description>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <HomeCard>
                  <RiUserLine size="50%" />
                  <p>Vous cherchez un joueur ?</p>
                </HomeCard>
                <Description>
                  <ul>
                    <li>
                      Vous êtes désireux de trouver des partenaires pour votre
                      partie ?
                    </li>
                    <li>
                      Vous souhaitez vous confronter à un adversaire afin
                      d'augmenter votre skill ou simplement converser et
                      échanger des stratégies et astuces ?
                    </li>
                    <li>
                      Vous faites partie d'un Team et souhaitez recruter un ou
                      plusieurs joueurs ?
                    </li>
                  </ul>
                </Description>
              </div>
              <div className="col-6">
                <HomeCard>
                  <RiTeamLine size="50%" />
                  <p>Vous cherchez une équipe ?</p>
                </HomeCard>
                <Description>
                  <ul>
                    <li>Vous souhaitez intégrer une Team ?</li>
                    <li>Vous cherchez à vous confronter à une Team ?</li>
                    <li>
                      Vous voulez organiser un tournoi et vous avez besoin de
                      contacter des Team ?
                    </li>
                  </ul>
                </Description>
              </div>

              <div className="col-6 mt-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-3">
                    <Step>Etape 1</Step>
                  </div>
                  <div className="col-3">
                    <Step>Etape 2</Step>
                  </div>
                  <div className="col-3">
                    <Step>Etape 3</Step>
                  </div>
                </div>
              </div>

              <div className="col-6 mt-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-3">
                    <Step>Etape 1</Step>
                  </div>
                  <div className="col-3">
                    <Step>Etape 2</Step>
                  </div>
                  <div className="col-3">
                    <Step>Etape 3</Step>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Middle>
      <Footer />
    </>
  );
};

export default Home;
