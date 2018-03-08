module.exports = [
  {
  	name: 'Polling.io',
    thumbnail: 'https://i.imgur.com/u1zwc3I.png',
    liveLink: 'http://polling-io.herokuapp.com/',
  	github: 'https://github.com/jcruzz/Polling.io',
    language: 'Javascript, SQL',
    stack: 'MariaDB, React, React-Router, JSONWebToken, Redis, bcrypt, Chart.js, Node/Express',
    info: `
          I created this application with the intention for people to create polls in order to enhance their discussion.
          In order to create polls, you must make an account since polls are bound to a unique user. However, as someone
          without an account, you're free to vote in polls at your convenience.
          `
  },
  {
  	name: 'Country Force Graph',
    thumbnail: 'https://i.imgur.com/FTtFOjm.png',
    liveLink: 'https://ancient-sierra-43985.herokuapp.com/',
  	github: 'https://github.com/jcruzz/country-force-graph',
    language: 'Javascript',
    stack: 'D3.js, HTML, CSS',
    info: `
            This is a force graph created by connecting the countries with other countries located very closely
            or are bordering each other. The nodes used for the graph are the flags of each respective countries,
            which are linked with lines.
          `
  },
  {
  	name: 'Just.ly',
    thumbnail: 'https://i.imgur.com/OKToW2a.png',
  	liveLink: 'https://just-ly.herokuapp.com/',
    github: 'https://github.com/jcruzz/just.ly',
    language: 'Javascript',
    stack: 'Redis, Node/Express, Axios, shortid',
    info: `
            This is a url-shortening microservice that uses Redis as the database for constant database lookups. 
            The key of the database is the generated shortid (which uses the endpoint '/:id'), and the value that 
            comes out is the website it shortened. The system design has two approaches, to create a shortened url, and to use a shortened url. 
          `
  },
  {
    name: 'Global Heat Map',
    thumbnail: 'https://i.imgur.com/6aZiHY0.png',
    liveLink: 'https://codepen.io/jvcruz/full/jZoejG/',
    github: 'https://github.com/jcruzz/global-heat-map',
    language: 'Javascript',
    stack: 'D3.js, HTML, CSS',
    info: `
            This is a heat map created to measure the land surface temperature from 1753 to 2015. 
            The graph is populated by bars that correspends to the years and months respectively 
            located at the X and Y axis, and using the color to determine the temperature. More
            information can be shown by hoving over the bar.
          `
  },
  {
    name: 'JWT-Auth React Boilerplate',
    thumbnail: null,
    liveLink: 'https://frozen-depths-11875.herokuapp.com/',
    github: 'https://github.com/jcruzz/react-router-auth-boilerplate-sql',
    language: 'Javascript',
    stack: 'MariaDB, React, React-Router, JSONWebToken, Redis, bcrypt, Chart.js, Node/Express',
    info: `
            This is a boilerplate I've created in order to ease future developments when I develop
            future projects that require authentication. It's also doubles as a React-Router boilerplate.
            Future developments will include styling, making a different version with a different database,
            and include social media authentication in order to hit the ground running when developing
            a new project. 
          `
  },
];