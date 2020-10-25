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

function toggleBackdrop(){
    backdrop.classList.toggle('visible');
};

function toggleMovieModal(){
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

function cancelAddMovieHandler(){
    toggleMovieModal();
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
};

function backdropClickHandler(){
    toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
addMovieBtn.addEventListener('click', addMovieHandler);
