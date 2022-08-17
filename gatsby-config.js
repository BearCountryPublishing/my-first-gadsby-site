module.exports = {
  siteMetadata: {
    title: `Bear Country Publishing`,
    siteUrl: `https://gatsby.bearcountrypublishing.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
