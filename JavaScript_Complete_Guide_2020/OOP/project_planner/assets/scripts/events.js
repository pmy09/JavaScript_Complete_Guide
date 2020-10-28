const buttons = document.querySelectorAll('button');

//button.onclick = function(){};

// const buttonClickHandler = () => {
//     alert('Button was clicked!');
// };

// const anotherButtonClickHandler = () => {
//     console.log('This was clicked!')
// }

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('This was clicked!')
}

//button.onclick = buttonClickHandler;
//button.onclick = anotherButtonClickHandler;

//button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler);
// }, 2000);
// // using .bind(this) in each here will not work as it creates 2 diff funcs. Use below

// const boundFn = buttonClickHandler.bind(this);
// button.addEventListener('click', boundFn);
// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler)
});