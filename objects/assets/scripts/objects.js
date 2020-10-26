const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies(filter = ''){
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0 ){
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const {info, ...otherProps} = movie;
    console.log(otherProps);
    //const {title: movieTitle} = info;
    let {getFormattedTitile} = movie
    //getFormattedTitile = getFormattedTitile.bind(movie);
    let text = getFormattedTitile.call(movie) + ' - ';
    for (const key in info){
      if (key !== 'title' && key !== '_title'){
        text = text + `${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
} 

function addMovieHandler(){
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  /*if (title.trim() === '' || extraName.trim() === '' || extraValue.trim === '') {
    return;
  }*/
  if (extraName.trim() === '' || extraValue.trim === '') {
    return;
  }
  const newMovie = {
    info: {
      set title(val){
        if (val.trim() === ''){
          this.title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title(){
        return this._title;
      },
      //title,
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitile() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };
  newMovie.info.title = title;
  console.log(newMovie.info.title);


  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

function searchMovieHandler(){
  console.log(this);
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);