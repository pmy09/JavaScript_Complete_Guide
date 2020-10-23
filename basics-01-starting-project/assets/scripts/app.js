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

function writeToLog(
    operationIdentifier,
    prevResults,
    operationNumber,
    newResult
    ){
       const logEntry = {
        operation: operationIdentifier,
        prevResults: prevResults,
        number: operationNumber,
        result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation)
        console.log(logEntries);  
    }

function add(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult += enteredNumber
    //alert(currentResult++);
    //alert(++currentResult);
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD',initialResult, enteredNumber, currentResult);
};

function subtract(){ 
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult -= enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT',initialResult, enteredNumber, currentResult);
};

function multiply(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult *= enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY',initialResult, enteredNumber, currentResult);
};

function divide(){
    const enteredNumber = parseInt(userInput.value);
    const initialResult = currentResult;
    currentResult /= enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE',initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);