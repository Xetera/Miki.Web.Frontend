/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Miki: the Discord bot!",
        short_name: "Miki",
        theme_color: "#f23084",
        background_color: "#2196f3",
        display: "browser",
        orientation: "portrait",
        start_url: "/",
        icon: "static/miki_avatar.png"
      }
    }
  ]
}
