//Day - 6

//classes - getter and setters

class Human {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    show() {
        return "Human id: " + this.id + " and Name is : " + this.name;
    }

}

const obj1 = new Human(1, "kirubhakaran");

console.log(obj1.show());

//class declarations are not hoisted - we need to declare before we use the class.

//they are used for -> comupute a property dynamically and hide internal implementation(encapsulation)[like not exposing the internal variables and formulas]

//get - set -> variables can be 

class Rectangle {
    constructor(width, height) {
        this._width = width; //internal property should be mentioned with _ (underscore) for diffrentiation
        this._height = height;
    }


    get area() {
        return this._width * this._height;
    }

    // set area(dimensions){ //only one parameter in the setter using object or separater setter like down
    //     const{width,height}=dimensions;
    //     this._height=height;
    //     this._width=width;
    // }

    set width(value) {
        this._width = value;
    }

    set height(value) {
        this._height = value;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area);

// rect = {width:20,height:5}; //setter with one parameter has object
// console.log(rect.area); //setter call

rect.width = 20;
rect.height = 5;
console.log(rect.area); //setter with individual paramater

//static - we can't use the object to call the method, we use the object class(classname).
//if we need to call the static method using the object, we need to pass the object has an parameter inside the static method


class Person {
    constructor(name) {
        this.name = name;
    }

    static hello(x) {
        return "hello! " + x;
    }
}

console.log(Person.hello("kirubhakaran"));

const obj2=new Person("Sanjay");

console.log(Person.hello(obj2.name));

//Dom - document object model - used to dynamically access,update,structure and style the document(html element)
//html elements - objects
//property - value(content)
//method - action

//to change the content of the html element - innerHTML
