import React from "react";
import styled from "styled-components";

import blur from "../images/blur.png";
import backgroundImage from "../images/team-background.png";

// const Header = styled.div`
//   background-image: url(${backgroundImage});
//   height: 100vh;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   z-index: 1;
// `
const Header = styled.div`
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%),
    url(${props => props.backgroundImage});
  height: ${props => props.height || "100vh"};
  background-repeat: no-repeat;
  background-size: cover;
  positive: relative;
  display: grid;
  grid-template-columns: 50% 50%;
`;
const Separator = styled.div`
  background-image: url(${blur});
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  z-index: 1;
`;

const HeaderTeamProfile = () => {
  return (
    <HeaderTeamProfile>
      <Header />
      <Separator />
    </HeaderTeamProfile>
  );
};

export default HeaderTeamProfile;
