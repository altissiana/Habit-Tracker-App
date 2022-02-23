import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { Link } from "gatsby";

import Seo from './seo';
import Footer from './Footer';
import Settings from "../components/Nav/settingsButton";
import Slider from "../components/Nav/sliderButton";
import { colorPalette, typeScale, primaryFont, secondaryFont } from '../utils';

const Main = styled.div`
  height: 70vh;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins';
  font-size: ${typeScale.paragraph};
  color: ${colorPalette.midnightGreen};
`;

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px; 
  text-align: center;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  padding: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  color: ${colorPalette.midnightGreen};
  .headerTitle {
    font-family: ${secondaryFont};
    font-size: ${typeScale.header1};
    color: ${colorPalette.midnightGreen};
    line-height: 20px;
    justify-self: center;
    grid-column: 2;
  }
  .cancelButton {
    grid-column: 3;
    justify-self: end;
    text-decoration: none;
    font-family: ${primaryFont};
    font-size: ${typeScale.paragraph};
    color: ${colorPalette.pink};
    &:hover,
    &:active {
      color: ${colorPalette.midnightGreen};
    }
  }
`;

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {  
  const location = useLocation();

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <NavContainer>
        {location.pathname === "/add" ? null : <Settings />}
        <h1 className="headerTitle">{title}</h1>
        {location.pathname === "/add" ? <Link to="/" className="cancelButton">Cancel</Link> : <Slider />}
      </NavContainer>

      <Main>{children}</Main>

      {location.pathname === "/add" ? null : <Footer/>}
    </>
  );
}