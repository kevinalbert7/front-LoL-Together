import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Logo from "../Logo";
import HeaderRightSide from "../../components/Header/HeaderRightSide";
import HeaderLeftSide from "../../components/Header/HeaderLeftSide";

const Header = styled.div`
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0) 70%),
    url(${(props) => props.background});
  height: ${(props) => props.height || "100%"};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) => props.backgroundPosition || "center"};
  positive: relative;
  display: grid;
  grid-template-columns: ${props => props.gridTemplateCol || "30% 70%"};
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeaderComponent = ({
  background,
  backgroundPosition,
  left,
  height,
  text,
  fontFamily,
  fontSize,
  size,
  right,
  paddingRight,
  justifyContentRight,
  alignItemsRight,
  widthRight,
  heightRight,
  justifyContentLeft,
  alignItemsLeft,
  widthLeft,
  heightLeft,
  paddingLeftSide,
  flexDirectionLeft,
  gridTemplateCol,
  paddingRightSide
}) => {
  return (
    <motion.div style={{ x: 100 }} animate={{ x: 0 }}>
      <Header
        background={background}
        backgroundPosition={backgroundPosition}
        height={height}
        gridTemplateCol={gridTemplateCol}
      >
        <HeaderLeftSide
          left={left}
          flexDirectionLeft={flexDirectionLeft}
          heightLeft={heightLeft}
          justifyContentLeft={justifyContentLeft}
          alignItemsLeft={alignItemsLeft}
          widthLeft={widthLeft}
          paddingLeftSide={paddingLeftSide}
        />
        <HeaderRightSide
          text={text}
          fontFamily={fontFamily}
          fontSize={fontSize}
          right={right}
          size={size}
          heightRight={heightRight}
          paddingRight={paddingRight}
          justifyContentRight={justifyContentRight}
          alignItemsRight={alignItemsRight}
          widthRight={widthRight}
          paddingRightSide={paddingRightSide}
        />
      </Header>
    </motion.div>
  );
};

export default HeaderComponent;
