 const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];
const startAddMovieBtn = document.querySelector('header button');
// startAddMovieBtn = document.querySelector('header').lastElementChild;

function toggleMovieModal(){
    addMovieModal.classList.toggle('visible');
};

startAddMovieBtn.addEventListener('click', toggleMovieModal());