// import React from "react";
// import styled from "styled-components";
// import { useLocation } from '@reach/router';
// import { Link, useStaticQuery, graphql } from "gatsby";

// import { typeScale } from "../../utils";
// import Settings from "./settingsButton";
// import Slider from "./sliderButton";

// const NavContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100px; 
//   text-align: center;
//   display: grid;
//   align-items: center;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: 1fr;
//   padding: 30px;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
//   color: black;
//   .headerTitle {
//     font-size: ${typeScale.paragraph};
//     font-weight: 700;
//     line-height: 20px;
//     justify-self: center;
//     grid-column: 2;
//   }
//   .cancelButton {
//     grid-column: 3;
//     justify-self: end;
//   }
// `;


// const Nav = ({
//   title = false
// }) => {
//   const data = useStaticQuery(graphql`
//     query getNavTitle {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);
//   const meta = data?.site?.siteMetadata ?? {};
//   const location = useLocation();

//   return (
//     <NavContainer>
//       {location.pathname === "/add" ? null : <Settings />}
//       <h1 className="headerTitle">{meta.title}</h1>
//       {location.pathname === "/add" ? <Link to="/" className="cancelButton">Cancel</Link> : <Slider />}
//     </NavContainer>
//   );
// };

// export default Nav;
    