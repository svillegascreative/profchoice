// adapted from https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3

const rp = require('request-promise-native');
const url = 'https://profchoice.com/search.html';

rp(url)
  .then(function (html) {
    console.log(html);
  })
  .catch(function (err) {
    console.log(err);
  });