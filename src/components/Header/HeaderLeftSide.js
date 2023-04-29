import React from "react";
import styled from "styled-components";

const LeftSide = styled.div`
  height: ${(props) => props.heightLeft || "100%"};
  width: ${(props) => props.widthLeft || "100%"};
  display: flex;
  justify-content: ${(props) => props.justifyContentLeft || "center"};
  align-items: ${(props) => props.alingItemsLeft || "center"};
  flex-direction: ${props => props.flexDirectionLeft || "row"};
  padding: ${props => props.paddingLeftSide};

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderLeftSide = ({
  left,
  heightLeft,
  widthLeft,
  alingItemsLeft,
  justifyContentLeft,
  flexDirectionLeft,
  paddingLeftSide
}) => {
  return (
    <LeftSide
      heightLeft={heightLeft}
      widthLeft={widthLeft}
      justifyContent={justifyContentLeft}
      alingItems={alingItemsLeft}
      flexDirectionLeft={flexDirectionLeft}
      paddingLeftSide={paddingLeftSide}
    >
      {left}
    </LeftSide>
  );
};

export default HeaderLeftSide;
