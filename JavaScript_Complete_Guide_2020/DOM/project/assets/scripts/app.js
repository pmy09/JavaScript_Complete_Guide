 const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];
const startAddMovieBtn = document.querySelector('header button');
// startAddMovieBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstElementChild;
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const addMovieBtn = addMovieModal.querySelector('.btn--success');
//const addMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.getElementsByTagName('input');
//const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

function updatePage(){
    if (movies.length === 0){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

function deleteMovieHandler(movieId){
    let movieIndex = 0
    for (const movie of movies){
        if (movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const movieList = document.getElementById('movie-list');
    movieList.children[movieIndex].remove();
    //movieList.removeChild(movieList.children[movieIndex]);
    cancelMovieDeletion();
    updatePage();
};

function cancelMovieDeletion(){
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

function startDeleteMovieHandler(movieId){
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');
    
    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

    confirmDeletionBtn = deleteMovieModal.querySelector('.btn--danger');

    //confirmDeletionBtn.removeEventListener('click', deleteMovieHandler.bind(null, movieId)); // doesn't work!!
    cancelDeletionBtn.removeEventListener('click', cancelMovieDeletion);

    cancelDeletionBtn.addEventListener('click', cancelMovieDeletion);
    confirmDeletionBtn.addEventListener('click', deleteMovieHandler.bind(null, movieId));
    //deleteMovieHandler(movieId);
};

function renderNewMovieElement(id, title, imageUrl, rating){
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element_image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie_element_info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id));
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
};

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
};

function closeMovieModal(){
    addMovieModal.classList.remove('visible');
};

function showMovieModal(){
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

function clearMovieInputs(){
    for ( const usrInput of userInputs){
        usrInput.value = '';
    }
};

function cancelAddMovieHandler(){
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
};

function addMovieHandler(){
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ){
        alert('Please enter valid input! (rating between 1 and 5');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updatePage();
};

function backdropClickHandler(){
    closeMovieModal();
    cancelMovieDeletion();
    clearMovieInputs();
};

startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);

