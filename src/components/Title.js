import React from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.fontFamily || "GrechenFuemen"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  text-align: center;
  font-size: ${(props) => props.size || "64px"};
`;

const Title = ({ text, size, fontFamily, fontStyle, fontWeight }) => {
  return (
    <TitleDiv
      size={size}
      className="animate__animated animate__bounceInRight"
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
    >
      {text}
    </TitleDiv>
  );
};

export default Title;
