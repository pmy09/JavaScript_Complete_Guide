 const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];
const startAddMovieBtn = document.querySelector('header button');
// startAddMovieBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
//const backdrop = document.body.firstElementChild;
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive')

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
};

function toggleMovieModal(){
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

function cancelAddMovie(){
    toggleMovieModal();
};

function backdropClickHandler(){
    toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieBtn.addEventListener('click', cancelAddMovie);
