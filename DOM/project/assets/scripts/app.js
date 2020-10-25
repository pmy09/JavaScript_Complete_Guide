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

const movies = [];

function updatePage(){
    if (movies.length === 0){
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

function renderNewMovieElement(title, imageUrl, rating){
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
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
};

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
};

function toggleMovieModal(){
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

function clearMovieInputs(){
    for ( const usrInput of userInputs){
        usrInput.value = '';
    }
};

function cancelAddMovieHandler(){
    toggleMovieModal();
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
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
    updatePage();
};

function backdropClickHandler(){
    toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);
