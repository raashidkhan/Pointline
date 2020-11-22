const cssnano = require("css-mqpacker")
const autoprefixer = require("autoprefixer")
const mqPacker = require("css-mqpacker")

module.exports = {
  siteMetadata: {
    title: `Pointline Architects`,
    description: `Pointline Architects, a firm established by young architects holding interest in a wide range of urban designing and interiors projects which includes affordable housing, apartments, bungalows , banquet halls etc. We are currently operating from our two branches located at Mumbai and Patna.`,
    author: `pointline`,
    keywords: `Architects, Pointline, Home Designing, Office Designing, Commercial Buildings, Residential Buildings, Interior Designing, Architect Patna , Architect Mumbai `,
    twitterUsername: "@pointline",
    image: "/twitter-card.jpg",
    siteUrl: "https://www.pointlinearch.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              "default",
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.pointlinearch.com`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pointline Architects`,
        short_name: `Pointline`,
        start_url: `/`,
        background_color: `#F28C8C`,
        theme_color: `#F28C8C`,
        display: `minimal-ui`,
        icon: `src/images/logo-small-dark.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`projects`, `teams`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Josefin Sans`,
    //         variants: [`300`, `400`, `600`, `700`],
    //       },
    //       {
    //         family: `Didact Gothic`,
    //         variants: [`400`],
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
