module.exports = {
  siteMetadata: {
    title: `Civ Quotes`,
    siteUrl: `https://www.civquotes.com`
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    }
  ]
};