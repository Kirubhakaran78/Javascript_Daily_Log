//Day - 4
// Set - is the collection of unique values, each value can occur once in a set.
// the values can be of any type, primitive value or objects.
// create : pass array directly or using add()

const letters = new Set([1,2,3,4,56,7]);

const letters1= new Set();
letters1.add(1);
letters1.add(2);
letters1.add(3);
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("a");
letters1.add("b");
letters1.add("c");

console.log(letters1); //  if we try to add the same value only the first inserted letters will be added

// to iterate using for..of

for(const variable of letters1){
    console.log(variable); 
}

//typeof set is object

console.log(typeof letters1);

console.log(letters1 instanceof Set); //true or false

//Methods
// size - to check size
console.log(letters.size);

//has() - returns true if the value exists in the set, or false
console.log(letters.has(8)); 

//forEach() - invokes function for the set element
letters.forEach(value =>{
    console.log(value);
})

//values() - method returns the iterator object with the values in a set
let letters1Values=letters1.values();

for(const variable of letters1Values){
    console.log(variable);
}

//keys() - set has no key so it will return the values of set in iterator object
let lettersKeys=letters.keys();

for(const variable of lettersKeys){
    console.log(variable);
}

//entries() - returns the key,value but there is no keys in set, so return iterator with [value,value] pairs from the set
let lettersEntries=letters.entries();

for(const variable of lettersEntries){
    console.log(variable);
}

//clear() - clear the all elements from the set
const set= new Set(['z,','x','c','v','b','n','m']);
console.log(set.size);

set.clear();

console.log(set.size);

//delete() - to delete the specific element in the set
const set1=new Set(
    [{x:2,y:3},
    {x:23,y:24}]
); //add multiple objects using array

set1.forEach((point) =>{
    if(point.y>10){
        set1.delete(point);
    }
}); //set delete only the object, not the number

console.log(set1.size);
// to check whether the object is deleted
set1.forEach((value)=>{
    console.log(value);
})


//union()  - returns the new set, union() method combines the two set and also maintain the unique values

const setA=new Set([1,2,4,5]);
const setB=new Set([1,2,4]);

const setC= setA.union(setB);

setC.forEach((value)=>{
    console.log(value);
}) // 4 is repeating in both setA and setB but it is not allowed in setC

//intersection() - methods only the values in both sets
const setI=setA.intersection(setB);

setI.forEach((value)=>{
    console.log("values from intersecton: "+value);
})

//diffrence() - returns the new set, contains element in the set but not in the argument set
const setD=setA.difference(setB);

setD.forEach((value)=>{
    console.log("values from difference: "+value); // only elements from setA without common elements
})

//symmetricDifference() - method returns the value in setA and setB, but not the intersection part(remove elements that are common)
const setSD=setA.symmetricDifference(setB);

setSD.forEach((value)=>{
    console.log("Symmetric Difference: "+value);
})

// isSubsetOf() - method returns true if all elements in set(setA) or also in the argument set(setB)(setB acts as parent)
const setSubsetOf=setA.isSubsetOf(setB);
 console.log("subset of setA and setB:"+setSubsetOf);


//isSupersetOf() - method returns true if all elements in the argument set(setB) or also in the set(setA)(setA acts as parent)
const setIsSupersetOf=setA.isSupersetOf(setB);
console.log("superset of setA and setB:"+setIsSupersetOf);

//isDisjointFrom() - method returns true if the elements from the set has no common elements with argument set
const setIsDistjointFrom=setA.isDisjointFrom(setB);

console.log("isDisjointFrom : "+setIsDistjointFrom);
