import React from "react";

import logo from "../assets/images/logo.png";

import styled from "styled-components";

const LogoDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.padding};

  @media (max-width: 1024px) {
    padding: ${(props) => props.padding1024};
  }

  img {
    height: ${(props) => props.height || "130px"};
  }
`;

const Logo = ({ height, padding, padding1024 }) => {
  return (
    <LogoDiv
      justifyContent
      className="animate__animated animate__backInDown"
      height={height}
      padding={padding}
      padding1024={padding1024}
    >
      <img src={`${logo}`} alt="LoL Together" />
    </LogoDiv>
  );
};

export default Logo;
