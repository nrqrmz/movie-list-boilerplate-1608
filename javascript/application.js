import Mustache from "mustachejs";

const results = document.getElementById('results')
const url = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"
const template = document.getElementById('movieCardTemplate').innerHTML

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const output = Mustache.render(template, movie)
      results.insertAdjacentHTML('beforeend', output)
    })
  })
