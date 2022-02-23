module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    description: `Habit Tracker is an app that helps you to build good habits, and reach your goals.`,
    image: `https://images.unsplash.com/photo-1590005194861-af70fa800956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-polished",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },__key: "pages"
  }, 
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Poppins`,
        `SF Pro Display`
      ],
      display: 'swap'
    }
  }
]};