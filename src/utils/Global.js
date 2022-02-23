import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html,
  body {
    font-size: 16px;
    box-sizing: border-box;
    height: 100%; width: 100%; margin: 0; 
    margin: 0;
    font-family: ${primaryFont};
    background-color: #f8f8ff;
    color: #25282B;
  }

  *, *::before, *:after {
    box-sizing: inherit;
  }
`;