class Course {
    #price;
    
    constructor(title, length, price){
        this.title = title;
        this.length = length;
        this.price = price;
    }
    calculateVal(){
        return this.length/this._price;
    }
    outputSummary(){
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
    }

    get price(){
        return '$'+ this._price;
    }
    set price(value){
        if (value < 0){
            throw 'Invalid Value'
        }
        this._price = value;
    }
}

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises){
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish(){
            console.log('Publishing ...')
    }
}

const jBasics = new Course('JavaScript Basics', 14, 9.99);
const jAdvanced = new Course('JavaScript Advanced', 56, 99.99);
const jPractical = new PracticalCourse('JavaScript Practicals', 20, 99.99, 20)
const jTheory = new TheoreticalCourse('JavaScript Theory', 6, 29.99)

console.log(jBasics);
console.log(jAdvanced);
console.log(jPractical);
console.log(jTheory);
console.log(jBasics.calculateVal());
console.log(jAdvanced.calculateVal());
console.log(jPractical.calculateVal());
console.log(jTheory.calculateVal());
jBasics.outputSummary();
jAdvanced.outputSummary();
jPractical.outputSummary();
jTheory.outputSummary();
jTheory.publish();
