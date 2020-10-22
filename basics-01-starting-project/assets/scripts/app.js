const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
// This is a comment!

/* this is another comment
please ignore me */

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
};

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
};

function add(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += enteredNumber
    //alert(currentResult++);
    //alert(++currentResult);
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries[0]);
};

function subtract(){ 
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber);
};

function multiply(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber);
};

function divide(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);