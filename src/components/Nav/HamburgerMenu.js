import React, { useState } from "react";
import styled from "styled-components";

import RightNav from "./RightNav";

const BurgerButton = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  top: 5px;
  right: 20px;
  display: flex;
  cursor: pointer;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 50px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 10px;
    transform-origin: 1px;
    transition: transform 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <BurgerButton open={open} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </BurgerButton>
      <RightNav open={open} />
    </>
  );
};

export default HamburgerMenu;
