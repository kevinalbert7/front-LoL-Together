import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0 auto"};
`;

const Button = ({ text, padding, margin }) => {
  return (
    <Btn
      type="submit"
      className="btn btn-dark"
      padding={padding}
      margin={margin}
    >
      {text}
    </Btn>
  );
};

export default Button;
