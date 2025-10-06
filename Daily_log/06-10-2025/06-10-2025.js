//Es6 - Features

/*Promises
--> three stages: pending, fulfilled, rejected
resolve - when the task is completed successfully
reject - when the task is failed
*/

let promise=new Promise((resolve,reject)=>{
    let taskCompleted=true;
    if(taskCompleted){
        resolve("Task Completed Successfully");
    }
    else{
        reject("Task Failed");
    }
});

promise
.then((msg)=>{console.log(msg)})
.catch((err)=>{console.log(err)});

//function returning promise
function getData(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data fetched successfully");
    },2000);
});
}


//async-await
//async function always returns a promise
//await - waits for the promise to resolve or reject
async function showData(){
    console.log("Fetching Data...");


    let result=await getData();
    console.log(result);
    console.log("Done");
}

showData();


//fetching the data from api
async function fetchUserData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users");

if(!response.ok){
    throw new Error("Network response was not ok");
}

let data=await response.json();

        console.log(data);
    }catch(error){
        console.log(error);
    }
}

fetchUserData();

//Object Destructuring -> extracting the values from the object and assigning them to variables

// we can use : to give the variable a different name, 
// variable can have default value
// variable name should match with the object key name
let user={
    name:"",
    age:30,
    city:undefined //only undefined will trigger the default value
}

let {name,age:Age,city:cityname="unknown"}=user;

//if the fullname is "", 0, null, undefined, false
// then,
let fullname=name || "Johnny";

console.log(fullname);
console.log(Age);
console.log(cityname);

//Array Destructuring -> extracting the values from the array based on position
let colors=["red","green","blue"];

let [first,second,third,fourth="yellow"]=colors;

console.log(fourth); //yellow - default value

let [first1,...rest]=colors; //rest operator
console.log(first1);
console.log(rest); //rest will be an array
