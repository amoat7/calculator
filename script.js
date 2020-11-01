let calculation = document.getElementById('calculation');
calculation.value = '';
let result = document.getElementById('result');
result.value = '';
let keyValues = [];
let values = []; 
let currentResult = 0;
let previousResult = 0;
let flag =0;
let operands = ['+','-','/','*'];
let lastVal;


function getKey(event){

    (event.target.innerHTML==='.')?flag++:'';
    

    (operands.includes(event.target.innerHTML))?flag=0:''
    

    if(operands.includes(keyValues[keyValues.length-1]) && (isNaN(parseFloat(event.target.innerHTML)) && (event.target.innerHTML!=='.'))){
        keyValues[keyValues.length-1]=event.target.innerHTML;  
    }

    else if(event.target.innerHTML==='.'&&keyValues[keyValues.length-1]==='.'){

        keyValues[keyValues.length-1] = '.';
        flag++;
    }


    else if(flag>=2&&event.target.innerHTML==='.'){
    }

    else{
        keyValues.push(event.target.innerHTML);
    }
    
    

    if(keyValues.length>25){
        keyValues.shift();
        
    }

    calculation.value = keyValues.join('');

    values  = calculation.value.split(/([*+/-])/g); 


    lastVal = values.length-1;
    if(!(operands.includes(values[lastVal])) && values[lastVal]!=='.'){

        if(values.length === 3 && values[lastVal]!==''){
            switch(values[lastVal-1]){
                case('+'):
                    currentResult = parseFloat(values[0]) + parseFloat(values[2]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('-'):
                    currentResult = parseFloat(values[0]) -parseFloat(values[2]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('/'):
                    currentResult = parseFloat(values[0]) / parseFloat(values[2]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('*'):
                    currentResult = parseFloat(values[0]) * parseFloat(values[2]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;
    
            }
        }

        else if(values.length > 4 && (!(operands.includes(values[lastVal])) && values[lastVal]!=='.') && values[lastVal]!==''){

            switch(values[lastVal-1]){
                case('+'):
                    currentResult = previousResult + parseFloat(values[lastVal]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('-'):
                    currentResult = previousResult - parseFloat(values[lastVal]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('/'):
                    currentResult = previousResult /parseFloat(values[lastVal]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;

                case('*'):
                    currentResult = previousResult *parseFloat(values[lastVal]);
                    previousResult = currentResult; 
                    result.value = currentResult;
                    break;
    
            }

        }

        else{

        }

        
    }
    
}




function keyColour(event){
    event.target.style.backgroundColor='grey';
}

function keyColour1(event){
    event.target.style.backgroundColor='';
}

function eventListeners(element){

    const key = document.getElementById(`${element}`);
    key.addEventListener('click', getKey);
    key.addEventListener('touchstart', keyColour);
    key.addEventListener('touchend', keyColour1);
    return key;

}

function clearValues(event){
    
    if(event.target.innerHTML==='CE'){

        result.value = '';
        calculation.value = '';
        keyValues = [];
        values = []; 
        currentResult = 0;
        previousResult = 0;
        flag =0;
    }

    else{

        result.value = '';
        keyValues.pop();
        calculation.value = keyValues.join('');
        currentResult = 0;
        previousResult = 0;

        if(keyValues[keyValues.length-1]==='.'){
            flag  = 0;
        }


    }
}

function clear(element){
    const key = document.getElementById(`${element}`);
    key.addEventListener('touchstart', keyColour);
    key.addEventListener('touchend', keyColour1);
    key.addEventListener('touchend', clearValues)

    return key;
    
}


const minus = eventListeners('minus');
const sum = eventListeners('plus');
const seven = eventListeners('seven');
const eight = eventListeners('eight');
const nine = eventListeners('nine');
const four = eventListeners('four');
const five = eventListeners('five');
const six = eventListeners('six');
const one = eventListeners('one');
const two= eventListeners('two');
const three = eventListeners('three');
const zero = eventListeners('zero');
const dot = eventListeners('dot');
const divide = eventListeners('divide');
const multiply = eventListeners('multiply');
const ce  = clear('ce-btn');
const c  = clear('c-btn');










