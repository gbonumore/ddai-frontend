import React from "react";
import styled from "styled-components";

const TotBalanceContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #000;
  padding: 15px;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 2% 5%;
  }
`;

const TotBalanceTitle = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 10px;
  color: #fff;
`;

const TotBalanceAmount = styled.span`
  display: flex;
  align-items: center;
  color: #fff;
`;

const OneDayChange = styled.span`
  margin-left: 6px;
  opacity: 1;
  color: #fff;
  font-size: var(--text-small);
  font-weight: 500;
`;

const TotBalance = props => {
  return (
    <TotBalanceContainer>
      <TotBalanceTitle>Tot Balance </TotBalanceTitle>
      <TotBalanceAmount>{props.TotBalanceAmount}</TotBalanceAmount>
      <OneDayChange>{props.OneDayChange}</OneDayChange>
    </TotBalanceContainer>
  );
};

TotBalance.defaultProps = {
  TotBalanceAmount: "no wallet connected",
  OneDayChange: ""
}

export default TotBalance;
