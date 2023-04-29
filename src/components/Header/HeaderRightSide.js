import React from "react";
import styled from "styled-components";
import Title from "../Title";

const RightSide = styled.div`
  height: ${(props) => props.heightRight || "65vh"};
  width: ${(props) => props.widthRight};
  display: flex;
  justify-content: ${(props) => props.justifyContentRight || "center"};
  align-items: ${(props) => props.alignItemsRight || "center"};
  font-size: 36px;
  padding: ${props => props.paddingRightSide};

  .p2 {
    font-size: 15px;
  }
`;

const HeaderRightSide = ({
  alignItemsRight,
  fontFamily,
  fontSize,
  heightRight,
  paddingRightSide,
  justifyContentRight,
  right,
  size,
  text,
  widthRight,
}) => {
  return (
    <RightSide
      heightRight={heightRight}
      width={widthRight}
      justifyContent={justifyContentRight}
      alignItemsRight={alignItemsRight}
      paddingRightSide={paddingRightSide}
    >
      <Title text={text} size={size} fontFamily={fontFamily} fontSize={fontSize}/>
      {right}
    </RightSide>
  );
};

export default HeaderRightSide;
