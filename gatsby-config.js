module.exports = {
  siteMetadata: {
    title: `Ryan.B`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@perseveringman`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
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
    // require.resolve(`../gatsby-source-github-issues`),
    {
      resolve: 'gatsby-source-github-issue',
      options: {
        owner: 'perseveringman',
        repo: 'blog',
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "apiserver__",
  
        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://flomoapp.com/api/memo/?tag=%E7%89%87%E5%88%BB`,
  
        method: "get",
  
        headers: {
          "x-xsrf-token": "eyJpdiI6IkJaTVwvT2pNU0xXbGJMN01UV25ibVlnPT0iLCJ2YWx1ZSI6Im11NUsyTVZ2N2E2dnIyWGF2akpFV1ZGUmJGa0t4cENLRVBrVDlNeGhndVdqbG9WTGRObEdBN1hEaThURlNiNzgiLCJtYWMiOiI2MjVkMDQwNjAzMWI0ZDRjYjIxN2Q0ZWM4MTJkMGEzYzE5NTY5Y2NkZWNhMTlkZDQxYzg2NTkwODFlOTEyZjQwIn0=",
          "Content-Type": "application/json",
          "cookie": "_ga=GA1.1.1706472824.1612340761; _ga_P4FKLL54HN=GS1.1.1612781028.4.1.1612781038.0; Hm_lvt_ee5cc40ac1c090bec5489c681fd7e6d8=1615541227; Hm_lpvt_ee5cc40ac1c090bec5489c681fd7e6d8=1616671251; XSRF-TOKEN=eyJpdiI6IkJaTVwvT2pNU0xXbGJMN01UV25ibVlnPT0iLCJ2YWx1ZSI6Im11NUsyTVZ2N2E2dnIyWGF2akpFV1ZGUmJGa0t4cENLRVBrVDlNeGhndVdqbG9WTGRObEdBN1hEaThURlNiNzgiLCJtYWMiOiI2MjVkMDQwNjAzMWI0ZDRjYjIxN2Q0ZWM4MTJkMGEzYzE5NTY5Y2NkZWNhMTlkZDQxYzg2NTkwODFlOTEyZjQwIn0%3D; flomo_session=eyJpdiI6IjRBM3I1c1FtSjBERVFkOU9lYWV3TFE9PSIsInZhbHVlIjoiM0x5N3FmUmQ5KzZrcVppSnJodThiS2FpUzJ4SzNWYkpmejdXY1wvcUxhSDZ4R0NkdHMwMEFmUFdSOW81S0hrR2QiLCJtYWMiOiI3ZWYxZmU3ZWY3MGMzMDIzNjliYjI3NGM1ZTAwMzIyMzk0ZWIxYzUzYTgyNTk4Y2ZhNzJlNTQ5Y2NkYmY3M2YwIn0%3D"
        },
  
        // Request body
        data: {},
        allowCache: false,
        enableDevRefresh: true,
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. think.json
        name: `think`,
  
        // Nested level of entities in response object, example: `data.think`
        // entityLevel: `data`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        autoLabel: 'dev-only',
      },
    },
  ],
}
