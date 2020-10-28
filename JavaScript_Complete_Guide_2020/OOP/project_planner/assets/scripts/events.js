const button = document.querySelector('button');
const buttons = document.querySelectorAll('button');

//button.onclick = function(){};

// const buttonClickHandler = () => {
//     alert('Button was clicked!');
// };

// const anotherButtonClickHandler = () => {
//     console.log('This was clicked!')
// }

const buttonClickHandler = event => {
    //event.target.disabled = true;
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

// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler)
// });

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

// TRY OUT THE SNIPPET BELOW
/*let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);*/

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
})

button.addEventListener('click', event => {
    event.stopPropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
    console.log(this);  // points to the browser window
});

// button.addEventListener('click', function(event) {
//     event.stopPropagation();
//     console.log('CLICKED BUTTON');
//     console.log(event);
//     console.log(this);  // points to the button
// });

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

list.addEventListener('click', event => {
    //console.log(event.currentTarget);
    //event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    //form.submit();
    button.click();
    console.log(this);
    });