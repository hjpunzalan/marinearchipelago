module.exports = {
  siteMetadata: {
    title: `Marine Archipelago`,
    description: `Insert description here`,
    author: `marinearchiepelago`,
  },
  plugins: [
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-responsive-iframe`],
    },
  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `@formspree/react`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marine Archipelago`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `rgba(0, 53, 97, 1)`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
