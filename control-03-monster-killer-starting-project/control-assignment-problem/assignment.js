const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7){
    console.log(randomNumber)
    console.log('Hey');
}

let myArray = [1, 2, 3, 4, 5]

for (let x = 0; x < myArray.length; x++){
    console.log(myArray[x]);
}
for (const x of myArray){
    console.log(x)
}

for (let x = myArray.length - 1; x >= 0; x--){
    console.log(myArray[x]);
}

const ranNum = Math.random();

if (randomNumber > 0.7 && ranNum > 0.7 || 
    randomNumber <= 0.2 || ranNum <= 0.2){
    alert('Greater than 0.7 or less than 0.2')
}