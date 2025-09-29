
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

//allow valid keys in keyboard
document.addEventListener('keydown',(event)=>{
const key=event.key; //like if press 5 then key is "5"

const allowed='0987654321/.+-*%';

const specialWords = ['Enter','Delete','Escape','Backspace','ArrowRight','ArrowLeft'];

if(!allowed.includes(key)&&(!specialWords.includes(key))){
    event.preventDefault();
}
})

//always focus on input box if we press any key
document.querySelectorAll('.num_btn').forEach(btn =>{
    btn.addEventListener('keydown',(e) =>{
       inputDisplay.focus();
    })
})

