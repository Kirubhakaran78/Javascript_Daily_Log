// Day - 1

// const arr=[1,2,3,4,5];

// console.log(Array.isArray(arr));

//Nullish Coalescing Operator (??)
let name=2;
let l_name="missing";
let result = name ??  l_name;

// console.log(result);

//adding string and numbers
console.log("4"+4);

console.log(4+5+"4"+4);

//spread  operator
let num=1234.99;

let min = Math.min(...num);
console.log(min);

//iterating the objects

const user={
    name:"kirubhakaran",
    age:22
};

for(const key in user){
    console.log(key,user[key]);
}

//object entries
Object.entries(user).forEach(([key,value])=>{
console.log(key,value);
}
);

// Ternary operator

const ismember=false;

const discount= ismember?0.2:2;

console.log(discount);

// use case : 1

let x = (5 == 5 || 5 < 2);  // What will be the value of x?

console.log(x);

<<<<<<< HEAD:22-09-2025.js

=======
>>>>>>> 613d5f9db3e5bff515f4dc5f26269906918a1112:Daily_log/22-09-2025.js
