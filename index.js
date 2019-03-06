// adapted from https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3

const rp = require('request-promise-native');
const $ = require('cheerio');
const url = 'https://profchoice.com/search.html';

rp(url)
  .then(function (html) {
    let items = $('.wsm-cat-list-item', html);
    // console.log( items.length );
    
    let itemLinks = $('.wsm-cat-title a', items);
    // Array.from(itemLinks).forEach( function (link) {
    //   console.log(link);
    // })
    
    let itemNames = $('.wsm-cat-title a', items).text();
    console.log(itemNames);
    
  })
  .catch(function (err) {
    console.log(err);
  });