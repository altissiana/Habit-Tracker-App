import React from "react";
import styled from "styled-components";

const AddButtonStyle = styled.svg`
  cursor: pointer;
  height: 58px;
  width: 58px;  
`;

const AddButton = props => (
  <AddButtonStyle>
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <circle cx="29" cy="29" r="29" fill="#073B4C" box-shadow="1px 3px 20px -4px #aaa"/>
      <path d="M31.8144 31.7469H40.5801V26.2684H31.8144V16.9872H26.1855V26.2684H17.4199V31.7469H26.1855V41.1356H31.8144V31.7469Z" fill="white"/>
    </svg>
  </AddButtonStyle>
);
export default AddButton;