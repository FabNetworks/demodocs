module.exports = {
  siteMetadata: {
    title: 'DemoDocs',
    description: 'DemoDocs',
    keywords: 'ibm,blockchain,fabnetworks',
  },
  plugins: ['gatsby-theme-carbon',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://fabnetworks.github.io/demodocs/',
          subDirectory: '/',
        },
      },
    }
  ],
  pathPrefix: "/demodocs/",
};
