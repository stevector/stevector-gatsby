const btoa = require("btoa")

module.exports = {
  pathPrefix: `/nested-example/site`,
  siteMetadata: {
    title: `Steve Persch's Blog`,
    description: `It's mostly just blog posts about Drupal`,
    author: `@stevector`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: " UA-42048647-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
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
        url: `https://${process.env.DATA_SOURCE_URL}/graphql`,
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
        purgeOnly: ["src/css/style.css", "src/css/global.css"],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/nested-example/site`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //  icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
