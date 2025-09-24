
let inputDisplay=document.getElementById('result');


function addValue(inputValue){
    inputDisplay.value+=inputValue; //append
}

//clear fn
function clearFn(){
    inputDisplay.value = inputDisplay.value.slice(0,-1);
}

//evaluate fn
function evaluateResult(){
    inputDisplay.value=eval(inputDisplay.value);
}

//clearAll fn
function ClearAllFn(){
inputDisplay.value="";
} 


