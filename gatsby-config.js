module.exports = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    // Simple config, passing URL
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'WEATHER',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'weather',
        // Url to query from
        url: 'https://graphql-weather-api.herokuapp.com/',
      },
    },
  ],
};
