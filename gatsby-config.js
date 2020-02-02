module.exports = {
  siteMetadata: {
    title: `Rural Mobility Framework`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@mozzillation`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-mdx`,
    {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/doc`,
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            path: `${__dirname}/src/data/`,
            maxWidth: 590,
          },
        },
      ],
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#00B868`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/rmf_icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
