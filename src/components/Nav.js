import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../contexts/UserContext";
import Logo from "../components/Logo"
import RightNav from "../components/RightNav";
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

const Nav = ({ open }) => {

  return (
    <NavContainer>
      <Logo height="50px" padding="0 35px"/>
      <HamburgerMenu />
    </NavContainer>
  );
};

export default Nav;
