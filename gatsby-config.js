module.exports = {
  siteMetadata: {
    title: `Habit Tracker`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Habit Tracker is an app that helps you to build good habits, and reach your goals.`,
    image: `https://images.unsplash.com/photo-1590005194861-af70fa800956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp","gatsby-plugin-offline", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `GatsbyJS`,
  //     short_name: `GatsbyJS`,
  //     start_url: `/`,
  //     background_color: `#FFFFFF`,
  //     theme_color: `#000000`,
  //     display: `standalone`,
  //   },
  //},
]};