module.exports = [
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
  	name: 'File Metadata Microservice',
    thumbnail: null,
  	liveLink: 'https://sleepy-wave-24750.herokuapp.com/',
    github: 'https://github.com/jcruzz/file-metadata-microservice',
    language: 'Javascript',
    stack: 'Node/Express, Multer module',
    info: `
            Using the Multer module, this full stack Javascript 
            application will take in any file given to the input, 
            and redirects you to a JSON response showing its size. 
          `
  },
  {
  	name: 'Image Search Abstraction Layer',
    thumbnail: null,
  	liveLink: 'https://dry-caverns-40752.herokuapp.com/',
    github: 'https://github.com/jcruzz/image-search-abstraction-layer',
    language: 'Javascript',
    stack: 'MongoDB (Mongoose), Node/Express, Google Custom Search API',
    info: `
            A backend program that takes in a search query that returns a JSON 
            response of image links, and original location from the Google Custom Search API. 
            Within the root endpoint '/', it displays the last 10 queries with a timestamp.

          `
  },
  {
  	name: 'Request Header Parser',
    thumbnail: null,
  	liveLink: 'https://tranquil-fjord-31587.herokuapp.com/',
    github: 'https://github.com/jcruzz/request-header-parser',
    language: 'Javascript',
    stack: 'Node/Express',
    info: `
            Returns the User Agent (Browser) OS information, 
            the language of your browser, and the public IP 
            address of your system in a JSON response. 
          `
  },
  {
  	name: 'Timestamp Converter',
    thumbnail: null,
  	liveLink: 'https://bog-tile.glitch.me/',
    github: 'https://github.com/jcruzz/timestamp-converter',
    language: 'Javascript',
    stack: 'Node/Express',
    info: `
            A backend application that will take either a natural 
            date format or a Unix timestamp that returns both natural 
            and Unix timestamps as a JSON response.
          `
  },
];
