const results = document.getElementById('results')
const url = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const movieCard = `<div class='col-3'>
      <div class="card bg-white shadow my-3">
        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
        <div class="card-body">
          <h2 class="card-title">${movie.Title}</h2>
          <p class="card-text">${movie.Year}</p>
          <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
        </div>
      </div>
    </div>`

    results.insertAdjacentHTML('beforeend', movieCard)
    })
  })
