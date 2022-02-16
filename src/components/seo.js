import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetAppMetadata {
      site {
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata;
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const path = new URL(props.path || '/', defaults.siteUrl);

  return(
    <Helmet>
      <meta name={title} content={description} />
      <link rel="canonical" href={path} />
      {image && <meta name="image" content={image} />}
    </Helmet>
  );
}
