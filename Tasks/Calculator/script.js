
let inputDisplay=document.getElementById('result');


function addValue(inputValue){
    inputDisplay.value+=inputValue; //append
}

//clear fn
function clearFn(){
    inputDisplay.value = inputDisplay.value.slice(0,-1);
}

//evaluate fn
// function evaluateResult(){
//     inputDisplay.value=eval(inputDisplay.value);
// }


function evaluateResult() {
  const expr = inputDisplay.value.trim();
  if (!expr) return;

  const isOperator = ch => ['+','-','*','/','%'].includes(ch);

  // do not evaluate if last char is operator
  if (isOperator(expr.slice(-1))) return;

  try {
    // basic input validation (only math characters)
    if (!/^[0-9+\-*/%.() \t]+$/.test(expr)) {
      throw new Error("Invalid characters");
    }

    // safely evaluate
    const result = Function('"use strict"; return (' + expr + ')')();

    // to handle divide by zero
    if (!isFinite(result)) throw new Error("Math Error");

    inputDisplay.value = result;
  } catch (err) {
    // error display
    inputDisplay.value = "Error";

    // auto clear after 1 second
    setTimeout(() => {
      inputDisplay.value = "";
    }, 1000);
  }
}



//clearAll fn
function ClearAllFn(){
inputDisplay.value="";
} 

//allow valid keys in keyboard
document.addEventListener('keydown',(event)=>{
const key=event.key; //like if press 5 then key is "5"

const allowed='0987654321/.+-*%';

const specialWords = ['Enter','Delete','Escape','Backspace','ArrowRight','ArrowLeft'];

if(key=== 'Enter'){
    event.preventDefault();
    evaluateResult();
    return;
}

if(key==='Escape'){
    event.preventDefault();
    ClearAllFn();
    return;
}

if(key=== 'Delete'){
event.preventDefault();
    clearFn();
    return;
}

if(!allowed.includes(key)&&(!specialWords.includes(key))){
    event.preventDefault();
}
})

//always focus on input box if we press any key
window.addEventListener('click', () => inputDisplay.focus());
inputDisplay.focus();

