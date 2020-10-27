class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
    name = 'Max';

    constructor(){
        super();
        this.age = 30;
    }
    greet(){
        console.log('Hi, I am '+ this.name +' and I am '+ this.age + ' years old.');
    }
}

// function Person(){
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function(){
//         console.log('Hi, I am '+ this.name +' and I am '+ this.age + ' years old.');
//     };
// }

 

// Person.describe = function(){
//     console.log('Creating persons ...');
// }

// Person.prototype.printAge = function(){
//     console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.toString());
// const p = new person.__proto__.constructor();
// console.dir(Object.prototype);

const p = new Person();
console.log(p);
