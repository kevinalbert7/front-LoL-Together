import React from "react";

import backgroundImage from "../images/home-background.png";

import { RiUserLine, RiTeamLine } from "react-icons/ri";

import styled from "styled-components";
import { motion } from "framer-motion";

import Nav from "../components/Nav";
import Logo from "../components/Logo";
import Title from "../components/Title";
import Footer from "../components/Footer";

const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%),
    url(${backgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const LeftDiv = styled.div`
  padding: 100px;
`
const RightDiv = styled.div`
  font-size: 36px;
  padding: 100px;

  .p2 {
    font-size: 15px;
  }
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <LeftDiv>
              <Logo justifyContent="left"/>
          </LeftDiv>
          <RightDiv>
            <motion.div style={{ x: -100 }} animate={{ x: 0 }}>
              <p>Recrutes des joueurs pour ton équipe, ou fais-toi recruter.</p>
              <p className="p2">
                Parce que jouer ensemble c'est aussi passer de bons moments.
              </p>
              <Title text="Découvrir" size="72" />
            </motion.div>
          </RightDiv>
        </Header>
        <Middle>
          <div className="container">
            <motion.div style={{ x: -100 }} animate={{ x: 0 }}>
              <div className="row">
                <div className="col-10 mx-auto fs-4 text-center m-4">
                  <Description>
                    Inscrivez-vous, et accédez à la base de données officielle
                    de League Of Legend pour trouver un joueur que vous pourrez
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
      </motion.div>
    </>
  );
};

export default Home;
