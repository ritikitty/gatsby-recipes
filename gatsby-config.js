/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    /*
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: `https://recipes.data.opensourced.ch/`,
        auth: {
          token: process.env.DIRECTUS_API_KEY,

          // Or you can use the credentials of an user
          // email: "orell@opensourced.ch",
          // password: "mysecretpassword",
        },
      },
    },
    */

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
