import React from "react";
import {
  RiTwitterLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
  RiTwitchFill,
} from "react-icons/ri";

import styled from "styled-components";

import GridFooter from "./GridFooter";
import Title from "../Title";

const FooterBackground = styled.div`
  background-color: black;
  margin: 3%;
  margin-top: 150px;
`;
const FooterBackgroundRow = styled.div`
  display: flex;
  justify-content: space-around;
`;
const IconsList = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-right: 30px;
  }

  ul li {
    display: block;
    background: black;
    border-radius: 20%;
    margin: 30px;
    list-style-type: none;
    font-size: 30px;
    transition: 0.5s;
  }

  ul li a {
    height: 60px;
    width: 60px;
    padding: 4px 0px 0px 16px;
    display: block;
    border-radius: 20%;
    color: #fff;
  }

  ul li:nth-child(1) {
    background: #1da1f2;
  }

  ul li:nth-child(2) {
    background: #e4405f;
  }

  ul li:nth-child(3) {
    background: #1877f2;
  }
  ul li:nth-child(4) {
    background: #6441a4;
  }

  ul li:nth-child(5) {
    background: #4078c0;
  }

  ul li:hover {
    transform: translateY(-8px);
    box-shadow: 7px 7px rgba(255, 255, 255, 0.7);
  }

  ul li a:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Footer = () => {
  return (
    <FooterBackground>
      <FooterBackgroundRow>
        <GridFooter
          title="Joueur"
          link1="/signup"
          text1="Créez votre compte"
          link2="/teams"
          text2="Rechercher des équipes"
        />
        <GridFooter
          title="Equipe"
          link1="/teamcreation"
          text1="Créez votre équipe"
          link2="/users"
          text2="Rechercher des joueurs"
        />
        <GridFooter
          title="Ressources"
          link1="/policy"
          text1="Conditions d'utilisations"
          link2="/contact"
          text2="Contact"
        />
      </FooterBackgroundRow>
      <div className="d-flex align-items-center my-5 flex-column">
        <div className="row text-center">
          <div>Made by

          <Title text="LoL Together Team" size="18" />
          </div>
        </div>
        <IconsList>
          <ul>
            <li>
              <a href="https://twitter.com/LeagueOfLegends">
                <RiTwitterLine />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/leagueoflegends/?hl=fr">
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/leagueoflegends/">
                <RiFacebookLine />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/directory/game/League%20of%20Legends">
                <RiTwitchFill />
              </a>
            </li>
            <li>
              <a href="https://github.com/JongCHONG">
                <RiGithubLine />
              </a>
            </li>
          </ul>
        </IconsList>
      </div>
    </FooterBackground>
  );
};

export default Footer;
