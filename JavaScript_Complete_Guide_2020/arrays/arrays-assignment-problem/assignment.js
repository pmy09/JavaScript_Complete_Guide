const myArray = Array(2, 4, 6, 8, 10)

const filter = myArray.filter(num => num > 5);
console.log(filter);


const mapped = myArray.map(num => ({number: num}));
console.log(mapped);

//let mult = 1;
// for (num of myArray){
//     mult *= num
// };
// console.log(mult);

//myArray.forEach(num => mult *= num);
const mult = myArray.reduce((prevValue, curValue) => prevValue * curValue, 1);
console.log(mult)


function findMax(...numbers){
    let maxNum = numbers[0];
    for (num of numbers){
        if (num > maxNum){
            maxNum = num;
        }
    }
    return maxNum
};

console.log(findMax(...myArray));


function findMinMax(...numbers){
    let minNum = numbers[0];
    let maxNum = numbers[0];
    for (num of numbers){
        if (num > maxNum) {
            maxNum = num;
        }
        if (num < minNum){
            minNum = num;
        }
    } 
    return [minNum, maxNum];
};

const [minNum, maxNum] = findMinMax(...myArray);
console.log(minNum, maxNum);


const values = new Set();
values.add(1);
values.add(1);
values.add(6);
console.log(values);
