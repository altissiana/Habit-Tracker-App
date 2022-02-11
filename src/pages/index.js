import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetAppTitle {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
    <Seo />
      <header>
        <Link to="/">{meta.title}</Link>
        <Link to="/add">+</Link>
        <Link to="/statistics">stats icon</Link>
      </header>
      <main>
        <h1>Blah!</h1>
      </main>
    </>
  )
}