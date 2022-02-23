import React from "react";
import styled from "styled-components";
import { colorPalette } from "../../utils";

const HomeButtonStyle = styled.svg`
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

const HomeButton = props => (
  <HomeButtonStyle>
    <svg height="34" width="34" viewBox="0 0 34 34" fill="none">
      <path d="M4.25 12.75L17 2.83337L29.75 12.75V28.3334C29.75 29.0848 29.4515 29.8055 28.9201 30.3368C28.3888 30.8682 27.6681 31.1667 26.9167 31.1667H7.08333C6.33189 31.1667 5.61122 30.8682 5.07986 30.3368C4.54851 29.8055 4.25 29.0848 4.25 28.3334V12.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.75 31.1667V17H21.25V31.1667" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </HomeButtonStyle>
);
export default HomeButton;