//const task1 = document.getElementById('task-1')
const task1 = document.querySelector('#task-1')

task1.style.color = 'white';
task1.style.backgroundColor = 'black';

// const title = document.querySelector('title');
// title.textContent = 'Assignment Solved!';

const head = document.head;
const title = head.querySelector('title');
title.textContent = 'Assignment Solved!';

const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment Solved'
