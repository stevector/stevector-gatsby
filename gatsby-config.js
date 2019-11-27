const btoa = require("btoa")

module.exports = {
  siteMetadata: {
    title: `Steve Persch`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Documentation: https://www.gatsbyjs.org/packages/gatsby-source-graphql/
      resolve: "gatsby-source-graphql",
      options: {
        // The names of all types in the remote schema will be prefixed with this word.
        typeName: `Drupal`,
        // The entire remote schema is available under this field.
        fieldName: `drupaldata`,
        // Endpoint URL.
        //url: `http://127.0.0.1:8888/graphql`,
        url: `https://live-stevector-drupal.pantheonsite.io/graphql`,
        headers: {
          Authorization: `Basic ${btoa(
            process.env.GATSBY_DRUPAL_USER +
              ":" +
              process.env.GATSBY_DRUPAL_PASSWORD
          )}`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
