/* Day - 3 */

// Array methods
//splice - add,remove,replace elements
//splice(start,deletecount,item1,item2.....)
//toSpliced() - same without modifying the original array
//add
let arr=[1,2,3,4];
arr.splice(1,0,6,7);
console.log(arr); //[1,6,7,2,3,4] add at index 1

//delete
arr.splice(2,1);
console.log(arr);

//replace
arr.splice(1,2,7,8);
console.log(arr);

//length of an array
const nums =[1,2,3,4,56,7];
console.log(nums.length);

nums[1]=21;
console.log(nums);


//multidimensional array
const random=[1,2,[3,4,5]];
console.log(random[2][2]);

// to find the index of an array - if there is no item in the index then -1
console.log(nums.indexOf(21));

// to add item in the array in last (can add one or more item)
const birds=['sparrow','pigeon'];
birds.push('bird1','bird2');
console.log(birds);

// to add item in first
birds.unshift("bird11");

// to remove the last item
birds.pop();

console.log(birds);

// to remove first item
birds.shift();
console.log(birds);

//splice in removing the item
const cities=["Karur","Erode","Tiruppur","Kangeyam"];

const index=cities.indexOf("Erode");

if(index != -1){
    cities.splice(index,1);
}

console.log(cities);

//iteration using for...of
const cities1=["Karur","Erode","Tiruppur","Kangeyam"];

for(let variable of cities1){
   console.log(variable + " city");
}

//join() - method in array, combine the elements in array and return as an string with comma separator and we can change how we need to 
// separate by providing it in the bracket in join

console.log(cities1.join()); //default separate by ,
console.log(cities1.join('')); //separate without space
console.log(cities1.join("-")); //separate with -   //if array length is 0 then empty string will be return

// toString() - another way to convert the array into an string
console.log(cities1.toString()); // they are always separate with comma

// keys() - returns an new iterator(index) of the array
const arraykeys=cities1.keys();

for(let variable of arraykeys){
console.log(variable);
}

//forEach() - runs a function for each element and doesn't return anything
const cities2=["Karur","Erode","Tiruppur","Kangeyam"];
cities2.forEach(x => console.log(x+" city"));

//at() - return the item of an array and takes both negative(position from last starts from 1) and positive integer(index)
const arr1=[1,2,3,4,5,6];

let index1=2;
let index2=-1;
console.log(`An array of ${index1} and the ${arr1.at(index1)}`);
console.log(`An array of ${index2} and the ${arr1.at(index2)}`);

//concat() - merge the two or more arrays and returns the new array
const array1=["hello","hai"];
const array2=["hello2","hai2"];
const array3=["hello3","hai3"];

console.log(array1.concat(array2,array3));

//copywithin() - copies the part of an array to another location in the same array without changing its length

//copywithin(target,start,end) 
//target - index where the copy will be placed
//start(optional) - index to start copying from (default 0)
//end(optional) - index to end(not including) copying from (default array.length)

//it changes the original array and return the original array

const array4=["one","two","three","four","five"];

array4.copyWithin(0,2);
console.log(array4);

//with end and the negative values
const letters=['a','b','c','d','e'];

letters.copyWithin(-2,1,3);
console.log(letters);

//entries() - returns the new array iterator object to iterate the keys/value pair of an each index in an array
//key is index in array

const letterEle=letters.entries();

for(let [key,element] of letterEle){
    console.log(key,element);
}

//every(callbackfn,thisArg) - checks whether all elements in an array pass the test implemented by the provided function and returns a boolean value.
const age=[19,20,40];

const checkAge = age.every((val)=> val>18);

console.log(checkAge);

//some() - tests whether at least one element in an array passes the condition in the function
const age1=[19,20,40];

const checkAge1 = age1.some((val)=> val<18);

console.log(checkAge1);

//fill(value,startindex,endindex) - changes the all the elements within the range of the indices and provide the static value, 
//it returns the modified array.
//endIndex is not included(before the index).

age.fill(0,1,3);
console.log(age);

//filter(callbackFn,thisArg) - return the new array that passes the test condition in the function from the original array
const words=["home","house","planet","earth","soil"];

const wordsfiltered=words.filter((value)=>value.length>5);

console.log(wordsfiltered);

//find(callbackfn,thisArg) - returns the first element that statisfies the condition in the function

const wordsFind=words.find((value)=>value.length>2);

console.log(wordsFind);

// findIndex(callbackfn,thisArg) - return the first index that statisfies the condition in the function, if no elements statisfies then -1
// findlast(callbackfn,thisArg) - iterates the array from the last and returns the first element that statisfies the condition in function
// findLastIndex(callbackfn,thisArg) -iterates the array from the last and returns the first index that statisfies the condition in function

//flat(depth) - flatten the array into the specified depth we have mentioned, and creates the new array
const flatEx=[1,2,[3,4,[5,6,[7,8]]]];

console.log(flatEx.flat(Infinity)); //default depth is 1

// for flattening fully use - Infinity

// flatmap() - returns a new array formed by applying a given callback function in each element of an array and "flattening the result"
//  by 1 depth.

const flatMapEx=[1,2,3];

const flatMapExVar=flatMapEx.flatMap((value) => (value === 2 ? [4,5]: [value]));

console.log(flatMapExVar);

// includes(value) - check whether the value present in the array or not, returns true or false
const includesEx=[1,2,2,34,5,6];

const includesExRes=includesEx.includes(43);

console.log(includesExRes);

//reduce() - executes the reduce function on each element in an array, resulting in an single value.
//syntax:
//reduce(callbackfn,initial value)
//callbackfn(accumulator,currentvalue,currentindex,array)
//accumulator - stores the result of the previous iteration(or initial value if provided)

const reduceEx=[1,2,3,4,5,6];

const reduceExRes=reduceEx.reduce((acc,curvalue) => curvalue=acc+curvalue,0)

console.log(reduceExRes);

//reduceRight() - excutes the reduce function and change the array into the single element but from the right to end
const reduceRightEx=[1,2,3,4,5,6];

const reduceRightRes=reduceRightEx.reduceRight((acc,value) => value=acc+value,0);

console.log(reduceRightRes);

//reverse() - reverse the array and change in the original arrray
const revEx=[1,2,3,4,5,6];

console.log(revEx.reverse());

//toreversed() - reverse the array without modifying the original array and returns a new array
const reversedEx=["hello","hai","welcome"];

console.log(reversedEx.toReversed());

//sort() - sorting the array in ascending order default, modifies original array
const sortEx=[1,2,3,4,5,67,0];
console.log(sortEx.sort());

//toSorted() - sorting the array without modifying the original array
const sortedEx=[1,2,223,4,5,67,0];

console.log(sortedEx.toSorted());

console.log(sortedEx);

// toLocaleString() - converts the numbers,string ,dates or arrays into a string using local language and 
//formatting rules(locale-aware formatting)

const numEx=123456;

console.log(numEx.toLocaleString("en-US")); //in Us english locale default

console.log(numEx.toLocaleString("en-IN"));

console.log(numEx.toLocaleString("en-IN",{style:"currency",currency:"INR"}));  // to change the indian currency

const localeEx=[1,2,"a",new Date()];
console.log(localeEx.toLocaleString("en-IN",{timeZone:"UTC"}));

//values() - returns a iterator object of an array, containing the values of an array
const valuesEx=["a","b","c","d","e"];
for(let variable of valuesEx.values()){
    console.log(variable);
}


// with(index,value) - returns the new arrray, with changing the value in the specific index
const withEx=[1,2,3,4,5];

console.log(withEx.with(2,21));


/* Math */

const x=2.6;

console.log("Round: "+Math.round(x)); //returns the nearest integer
console.log("Floor: "+Math.floor(x));  //returns the rounded Down to its nearest integer
console.log("Ceil: "+Math.ceil(x)); //returns the rounded Up to its nearest integer
console.log("Trunc: "+Math.trunc(x)); // returns the integer part (2)

console.log("Sign: "+Math.sign(x)); // returns the sign of the integer if its positive returns 1, then negative returns -1,zero means return 0\
console.log("Power: "+Math.pow(2,3)); //returns the 2 to the power of 3

console.log("Square root: "+Math.sqrt(72)); //returns the square root of the number

console.log("Absolute "+Math.abs(-2.9)); //returns the positive(absolute) integer

console.log("PI value: "+Math.PI); //returns the PI value
console.log("Euler's Number: "+Math.E);

console.log(Math.min(1,2,3,4,56)); //returns the minimum value
console.log(Math.max(1,2,3,4,56)); //returns the maximum value

console.log(Math.random()); //returns the random value between 0 to 1