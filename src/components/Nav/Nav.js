import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

import HamburgerMenu from "./HamburgerMenu";

const Logo = styled.div`
  padding: 0 35px;
  img {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 1024px) {
    padding: 0 17px;
  }
`;

const NavContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <HamburgerMenu />
    </NavContainer>
  );
};

export default Nav;
