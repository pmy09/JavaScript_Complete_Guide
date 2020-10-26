const person = {
  name: 'Max',
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

person.greet();