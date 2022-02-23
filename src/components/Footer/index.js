import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { colorPalette } from "../../utils";

import Add from "./addButton";
import Home from "./homeButton";
import Stats from "./statsButton";

const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`; 

const ButtonContainer = styled(Link)`
  bottom: 0;
  height: 100px;
  text-align: center;
  width: 50%;
  cursor: pointer;
  border-bottom: none;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:not(.disabled):hover,
  &:not(.disabled):active {
    border-bottom: 8px solid ${colorPalette.pink};
  }
`;


const Footer = () => (
  <FooterContainer>
    <ButtonContainer to="/"><Home/></ButtonContainer>
    <ButtonContainer to="/add" className="disabled"><Add/></ButtonContainer>
    <ButtonContainer to="/stats"><Stats/></ButtonContainer>
  </FooterContainer>
);

export default Footer;