const results = document.getElementById('results')
const url = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"
const template = document.getElementById('movieCardTemplate')

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const clone = template.content.cloneNode(true)
      clone.querySelector('img').src = movie.Poster
      clone.querySelector('h2').innerText = movie.Title
      clone.querySelector('p').innerText = movie.Year
      clone.querySelector('a').href = `https://www.imdb.com/title/${movie.imdbID}`

      results.appendChild(clone)
    })
  })
