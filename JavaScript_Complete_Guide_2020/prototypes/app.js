class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
    name = 'Max';

    constructor(){
        //super();
        this.age = 30;
    }

    // greet = () => {
    //     console.log('Hi, I am '+ this.name +' and I am '+ this.age + ' years old.');
    // };  // a1

    greet(){
        console.log('Hi, I am '+ this.name +' and I am '+ this.age + ' years old.');
    }
}

// function Person(){
//     this.age = 30;
//     this.name = 'Max';   
//     // this.greet = function(){...} 
// }

//  Person.prototype.greet = function(){
//     console.log('Hi, I am '+ this.name +' and I am '+ this.age + ' years old.');
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

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p.__proto__ === p2.__proto__);

// const button = document.getElementById('btn');
// //button.addEventListener('click', p.greet);   // with a1
// button.addEventListener('click', p.greet.bind(p));

const course = {
    title: 'Java',
    rating: 5
};

//console.log(Object.getPrototypeOf(course));
//console.log(course.__proto__);

Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function(){
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function(){
        console.log(this.progress);
    }
}, {
    name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
    }
});

// student.name = "Max";

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});

student.printProgress();

console.log(student);

course.printRating();
