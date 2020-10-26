const movieList = document.getElementById('movie-list');

movieList.style['backgroundColor'] = 'red';
movieList.style.display = 'block';

const person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

//person.age = 31;
delete person.age;
person.isAdmin = true;
console.log(person);

//person.greet();

console.log(person['first name']);