import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0 auto"};
  border: ${props => props.border || "1px solid #ffffff"}
`;

const Button = ({ text, padding, margin, border }) => {
  return (
    <Btn
      type="submit"
      className="btn btn-dark"
      padding={padding}
      margin={margin}
      border={border}
    >
      {text}
    </Btn>
  );
};

export default Button;
