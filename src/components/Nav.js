import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo"
import HamburgerMenu from "./HamburgerMenu";

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
      <Logo height="50px" padding="0 35px" padding1024="0 17px"/>
      <HamburgerMenu />
    </NavContainer>
  );
};

export default Nav;
