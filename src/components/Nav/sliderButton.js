import React from "react";
import styled from "styled-components";

const SliderButtonStyle = styled.svg`
  stroke: #000000;
  cursor: pointer;
  height: 24px;
  width: 24px;
  justify-self: end;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.2s linear, color 0.2s linear;
`;

const SliderButton = props => (
  <SliderButtonStyle>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 21V14" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M4 10V3" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 21V12" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 8V3" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 21V16" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20 12V3" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 14H7" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 8H15" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 16H23" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </SliderButtonStyle>
);
export default SliderButton;