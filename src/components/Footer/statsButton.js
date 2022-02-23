import React from "react";
import styled from "styled-components"
import { colorPalette } from "../../utils";


const StatsButtonStyle = styled.svg`
  stroke: ${colorPalette.midnightGreen};
  cursor: pointer;
  height: 34px;
  width: 34px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:hover,
  &:active {
    stroke: ${colorPalette.pink};
  }
`;

const StatsButton = props => (
  <StatsButtonStyle>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M25.5 28.3333V14.1666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 28.3333V5.66663" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 28.3334V19.8334" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </StatsButtonStyle>
);
export default StatsButton;