import React from "react";
import styled from "styled-components";
import Title from "../Title";

const RightSide = styled.div`
  font-size: 36px;
  padding: 100px;

  .p2 {
    font-size: 15px;
  }
`;

const HeaderRightSide = ({ text }) => {
  return (
    <RightSide>
      <Title text={text} size="64" />
    </RightSide>
  );
};

export default HeaderRightSide;
