const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'
};

//person.age = 31;
delete person.age;
person.isAdmin = true;

//person.greet();

const keyName = 'first name';

console.log(person[keyName]);
console.log(person['first name']);
console.log(person[1.5]);
console.log(person);