/* Day 5 */
//Weakset - collections of values where the values are must be objects, and holds them weakly
// (meaning they dont prevent objects from beging garbage collected the weakly refrenced object)
// they or not iterable - with for loops(),forEach(), or values() and they dont have size() method
// they only have add(),delete(),has() and new WeakSet()
// use case: Tracking object without prevention garbage collection


// Weakly refrenece means we make the obj=null, and later it will be garbage collected, but in set when we delete then only it will removed.
let visited = new WeakSet();

function visit(node){
    if(visited.has(node)){
        console.log("Already visited: " , node );
    }else{
        visited.add(node);
        console.log("visiting: " , node );
    }
}


let obj={id:1};

visit(obj);
visit(obj);

//methods in WeakSet

let ws= new WeakSet();

ws.add({id:1});

ws.add({name:"kirubhakaran"});

let obj1={null:"hello"};
ws.add(obj1);

console.log(ws.has(obj1));

ws.delete(obj1);

console.log(ws.has(obj1));

//Map - holds the key-value pairs of any data type
//map remembers the original insertion order of the keys

//creation 
// to pass array into the map 
let mapar=new Map([
    [1,"kirubha"],[2,"sanjay"],[3,"bharani"]
]);

//to create a map using set method
const fruits = new Map();

fruits.set("apple",150);
fruits.set("banana",30);
fruits.set("pineaple",45);

//using set() - we can also change the existing data
fruits.set("pineapple",55);

//to get the value of key in a map
console.log(fruits.get("pineapple"));

console.log(typeof fruits); //return type of map is object

console.log(fruits instanceof Map);

console.log(fruits instanceof Object);// Object(introduced in es6+ so it can be class ,before it was a function constructor) - technically a function
// Object is a top level constructor that holds Map,Date,Array

//size - property returns the number of elements in the map
console.log(fruits.size);

//delete()
fruits.delete("pineapple");

console.log(fruits.size);

//clear() - remove all the elements

//fruits.clear();
console.log(fruits.size);

//has() - returns true if the keys is exists in a map
console.log(fruits.has("pineapple"));

//forEach() - retrive all key/value pairs in a map
const fruits1 = new Map();

fruits1.set("apple",150);
fruits1.set("banana",30);
fruits1.set("pineaple",55);

fruits1.forEach((value,key)=>{ //parameter order was forEach((value,key,map) =>{})
    console.log(key,value);
});

//entries() - returns the iterable object with [key,value] in a map

for(let variable of fruits1.entries()){
    console.log(variable);
}

//keys() - returns the iterable object with keys in a map

for(let variable of fruits1.keys()){
    console.log(variable);
}

//values() - returns the iterable object with values in a map

for(let variable of fruits1.values()){
    console.log(variable);
}

//We can use objects has key is the important feature in the Map
const apple={name:"apple"};
const mango={name:"mango"};
const guava={name:"guava"};
const lemon={name:"lemon"};

const fruits2 = new Map();

fruits2.set(apple,500);
fruits2.set(mango,200);
fruits2.set(guava,300);
fruits2.set(lemon,100);

console.log(fruits2.get(apple)); //apple is not a string it was an object

//Map.groupBy(iterable,callbackfn) - is a static method that groups elements of an iterable into a map, it returns a map
// Each key in the resulting map comes from the value returned by your callback function
// Each values in the array of all items from the iterable that produced that key

//In simple - group all elements that produce same key by the callback fn

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const mapResult=Map.groupBy(inventory,(item)=>item.type);

const mapResult1=Map.groupBy(inventory,(item)=>{
    return item.quantity > 6 ? "dont need to restock" : "need to restock";
});

console.log(mapResult);
console.log(mapResult1);

//WeakMap - holds a key/value pairs where the key are should be objects
//key are weakly referenced(grabage collection happens automatically)
//we can't iterate the WeakMap

const wmObj1={name:"kirubhakaran"};
const wmObj2={name:"kishore"};
const wmObj3={name:"sanjay"};


const wm=new WeakMap();

//allowed methods are set(key,value), get(key), has(key), delete(key)

wm.set(wmObj1,"Human1");
wm.set(wmObj2,"Human2");
wm.set(wmObj3,"Human3");

console.log(wm.get(wmObj2));

//use: it is often used for privacy, we can't inspect what is inside the key(object)
wmObj1=null; //now the key(object is weakly referenced and removed automatically)

//Dates
const d= new Date(); //gives current date and time
console.log(d);

const d1=new Date("2022-03-25") //to set date //this will get the date and time' 
console.log(d1);

const d2=new Date(2025,9,22); //to set the new Date(year,month(0-11),date,hour,mintues,seconds,milliseconds)
console.log(d2);

const d3=new Date(2018); //it will treated has milliseconds, to set the year need to use month also
console.log(d3);

console.log(d.toString()); //in html automatically converted to toString(), time is default in system or server

console.log(d.toUTCString()); // to get the utc time,it is a time standard

console.log(d.toISOString()); // to get the iso time, it is a standard format with date and time with utc time(if its utc means there is 'z' mentioned)

const d4=new Date("2025-09");
console.log(d4.toString());// just mentioning year and date

const d5=new Date("2025");
console.log(d5.toString());// just mentioning year, but takes jan 1st day as default

//If we try to give the date has string then separate date and time with capital T and mention at last Z for utc time standard, if not then result vary
const d6=new Date("2025-09-26T12:00:00.00Z");
console.log(d6.toString());

//javascript long dates 
const d7=new Date("jan 25 2025");
console.log(d7.toString()); // also work like this (ex: new Date("25 jan 2025"), the month and date can change

// to change the date to the milliseconds 
//Date.parse() - returns the no.of milliseconds between the date jan 1,1970

const mesc=Date.parse("jan 25 2025");
console.log(mesc);

const d8=new Date();
console.log(d8.getFullYear()); //getYear(2 digit) is depricated
//Same for getMonth() - 0 to 11,getDate(),getDay(),getTime(),getHours(),getMintues(),getSeconds(),getMilliseconds()

console.log(d8.getTime()); //milliseconds from jan 1,1970

console.log(d8.getMilliseconds()); 

//same for utc - getUTCFullYear() and others

//difference time between utc and the local time zone
console.log(d8.getTimezoneOffset()); 

//to set the time 
const d9=new Date('sept 15 2020');
d9.setFullYear(2025); //setting the year to 2025 from 2020
console.log(d9.toString());

//to add the date form the given date
d9.setDate(d9.getDate()+180);
console.log(d9.toString());

//same for the setHours,setMinutes,setTime,setDay,setFullYear,setMilliseconds and also for setUTCFullYear vice versa.


//class
//class is a template for the javascript objects and it creates the structure(properties ex:name,age) and behaviour(method) for the objects. 
//when we have class we create an objects.

class Human{
    constructor(name,year){ // should have constructor in all the class
        this.name=name;
        this.year=year;
    }

    //methods
    age(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}

const humanobj=new Human("kirubhakaran",2003);
const humanobj1=new Human("Sanjay",2002);
const humanobj2=new Human("Bharani",2002);

console.log(humanobj.name);
console.log(humanobj.year);
console.log(humanobj.age());

//Class inheritance - to inherit the class use the "extends" keyword and the class can inherit all the "methods" from the class
//It is used for the code reusability

class Car{

    constructor(brand){
        this.brand= brand;
    }

    brandName(){
        return "I have the "+ this.brand;
    }
}


class Model extends Car{

constructor(brand,year){
    super(brand);
    this.year=year;
}

show(){
    return this.brandName() + " car, it's a model of : "+ this.year;
}

}

const modelObj= new Model("maruthi",2025);

console.log(modelObj.show());




