// Day 2 - functions(call,apply,bind,this), loops, String methods


// continue with labled statement (Switch also same syntax)
let text1=" ";

loop1: for(let i=1;i<=5;i++){
    loop2: for(let j=1;j<=5;j++){
        if(i==4){
            continue loop1;
        }
        text1+=i+" ";
    }
}

console.log(text);

// Array, Object, String, Number, Float, Boolean, Bigint (Declared but not initializd and explicitly initialized) 

/* Array */
let arr;
console.log(arr); // undefined

arr=[];
console.log(arr); // []

/* Object */
let obj;
console.log(obj); // undefined

obj={};
console.log(obj); // {}

/* String */
let str;
console.log(str); // undefined

str="";
console.log(str); // empty line

/* Number */
let num;
console.log(num); // undefined

num=0;
console.log(num); // 0

/* Float */
let float;
console.log(float); // undefined

float=0.0;
console.log(float); // 0

/* Boolean */
let boolean;
console.log(boolean); // undefined

boolean=false;
console.log(boolean); // false

/* bigint */
let bigint;
let bigint2=0n;
console.log("Bigint: ",bigint,bigint2);// undefined 0n

// String - Practice
let str1="John vino";
console.log(str1);

let str2="John vino 'prabhakaran'";
console.log(str2);

// build in property
console.log(str2.length);

// Backslash escape character
console.log("the boy\'s are more \\ \"productive\"");

/* \n - new line , \t- extra spacing */


// String - search methods
/* indexOf(substring,startindex) - return the index of the substring (return 1st postition only) 
 - also has lastIndexOf(substring,startindex)
*/
let text="Hello world, welcome to the universe.";
console.log(text.indexOf("world"));

//search - return the index of the pattern (1st postition only)
console.log(text.search("t"));


/* 
match - extract matches of regular expression (every postion) (return a array or content) - also has matchAll()
*/
console.log(text.match(/el/gi)); // gi - global search(in full string) and i- makes it case sensitive

/* 
includes - retruns true or false if the string contains a specified value 
- also has startsWith(substring,startindex), endsWith(substring,startindex) [These 3 are case sensitive]
*/
console.log(text.includes("el"));

// String - Methods
// length
let Str="hello and hello";
console.log(Str.length);

//Case conversion
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());

console.log(Str.toUpperCase());

//Extracting
console.log(Str.slice(2,5)); // use: handle negative values convert to positive and do not swap if start>end
console.log(Str.substring(2,5)); // use: don't handle negative if negative then give zero and automatically swap if start>end

//Replacing

console.log(Str.replace("hello","hai")); // make changes in first occurence
// to make more global and case-sensitive
console.log(Str.replace(/hello/gi,"hai")); // both replaceAll and /hello/g are same because making it global
// to replace all matches
console.log(Str.replaceAll("hello","hai"));

//Trimming - Removing the whitespace from the leading and trailing whitespace
let Str2="   Hello Everyone   ";

console.log(Str2);// doesn't remove the whitespace
console.log(Str2.trim()); // removes whitespace from the both end
console.log(Str2.trimStart()); // removes whitespace form the start
console.log(Str2.trimEnd()); //removes whitespace form the end

/*  
split - split(separator,limit)  - returns an array
separtor- character or pattern to split the stirng 
limit- maximum no of splits
*/
let Str3="apple,banana,pineapple,watermelon";
console.log(Str3.split(','1));

// repeat() - method returns the string with a number of copies of a string. return the new string
console.log(Str3.repeat(3));

//padding 
// padStart(targetlength,padString) - pad at start of the string
//targetlength - total length of the final string after padding
//padString - what we need to pad(optional default is space " ")
let Str4="kirubha";
console.log(Str4.padStart(30,"how are you"));

// Same for the padEnd(targetlength,padString);

//Accessing the String
let word="Javascript";

console.log(word.at(5)); // to get the character at the index of the string

console.log(word.charAt(3)); // always return the string even if the character is symbol or number - uf its out of bound then "empty string"
// Also using the bracker notation
console.log(word[3]); // if out of bounds then it will be "undefined"

console.log(word.charCodeAt(3)); //return the unicode of the character in that index

// Concatenation
let Str5="hello";
let Str6="world";

console.log(Str5.concat(",",Str6,"!")); // can take multiple arguments and also use + operator.

let x = 123;

let text5 = x.toString(2);
console.log(text5);

/* Functions */
// Arrow functions - introduced in ES6
let funcname = () => {
    console.log("hello");
}

funcname();

//this
//1.Global function - In non-strict mode gives "global object"  and in browser gives "window" and in strict mode gives "undefined"
// "use strict";
function show(){
    console.log(this);
}

show();


//2.object Method
let obj1 = {
    name:"kirubhakaran",
    greeting: function(){
        console.log("Hello, "+this.name);
    }
};

obj1.greeting(); 

//3. this will not work in arrow function - this takes from outside

//4. constructor function

function Person(name){
    this.name=name;
}

let p =new Person("charlie");
console.log(p.name); //when called with new, "this" refers to the newly created object.

//5.event handlers in DOM // this represents the current html element or in event handling html element the triggers
<button id="btn">click</button>

document.getElementById(btn).onclick=function(){
console.log(this);
}

//Functions
//call - fn.call(thisArg,par1,par2,..) - thisArg is object we want to use it in the fn and par1, and par2 are the actual parameters of the function

function greet(greeting,punctuation){
    console.log(greeting+" "+this.name+punctuation);
}

const person={name:"kirubhakaran"};

greet.call(person,"Hello,","!");

/*
apply - fn.apply(thisArg,[par1,par2,..])
thisArg -> the object that becomes the function’s this
second argument -> must be an array (or array-like object).
The array elements are spread out and passed as individual parameters to the function 
[if there is extract elements in array then function will ignore them if they don't use them]
*/

function sum(a,b,c){
    return a+b+c;
}

let nums=[1,2,3,4];

console.log(sum.apply(null,nums));

/*
bind - fn.bind(thisArg, par1, par2, ..)
thisArg -> the object that becomes the function’s this (permanently fixed)
arguments -> optional, can preset function parameters
does not call the function immediately -> returns a new function
extra arguments given later are added after the preset ones
*/

function greet1(msg,sign){
    console.log(msg+" "+this.name+sign);
}

const person1={name:"kirubhakaran"};

const bindFn=greet1.bind(person1);

bindFn("Hello,","!");
