let calculation = document.getElementById('calculation');
calculation.value = '';
let result = document.getElementById('result');
result.value = '';
let keyValues = [];
let values = []; 
let flag =0;
let operands = ['+','-','/','*'];


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

    if 
    
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










