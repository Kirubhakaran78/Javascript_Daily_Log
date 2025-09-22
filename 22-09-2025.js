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
)
