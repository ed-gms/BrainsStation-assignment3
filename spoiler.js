const request = require('request');
const cheerio = require('cheerio');
const readlineSync = require('readline-sync');
const movie = process.argv[2];
const time = process.argv[3];

console.log(`**spoiler warning** about to spoil the movie ${movie} in ${time} seconds`);

let url = `http://www.google.ca/search?q=${movie}`
request(url, (error, response, body) => {
  let $ = cheerio.load(body)
  $('.r').each(function (i, title) {
    console.log($(this).text())
  });
});
request(`https://api.themoviedb.org/3/search/movie?api_key=0ce1a2f5362c1b5f83dda75814e50b2d&query=${movie}`,
  function (err, response, body) {
    let obj = JSON.parse(body)
    mvTitle = obj.results[0].title
    spoiler = obj.results[0].overview
    
    JSON.stringify(mvTitle, spoiler)

    setTimeout(() => {
      console.log(spoiler)
    }, time * 1000)
  })