const defaultResult = 0;
let currentResult = defaultResult;

function add(x, y){
    const result = x + y;
    alert('The result is '+ result);
}

add(1, 2);
add(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;

//let calculationDescription = '('+ defaultResult + ' + 10) * 3 / 2 - 1';
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
//let errorMessage = 'An error occured!'

outputResult(currentResult, calculationDescription);