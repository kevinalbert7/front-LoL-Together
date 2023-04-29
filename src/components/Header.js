import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Header = styled.div`
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%),
    url(${(props) => props.background});
  height: ${(props) => props.height || "65vh"};
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftDiv = styled.div`
  padding: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderTeamProfile = ({ background, children, height }) => {
  return (
    <Header background={background} height={height}>
      <LeftDiv>
        <Logo />
      </LeftDiv>
      {children}
    </Header>
  );
};

export default HeaderTeamProfile;
