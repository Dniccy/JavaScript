function greet (name) {
    console.log("Hello, " + name + "!");
}

greet("Dom"); // Output: Hello, Dom!
greet("Abbie");// Output: Hello, Abbie!

// Function
function sayHello(){
    console.log("Hello!");
}

const person = {
    name: "Dom",
    greet: function (){
        console.log("Hello, my name is " + this.name);
    },
};

sayHello(); // Output: Hello!
person.greet();// Output: Hello,  my name is Dom

function calculateRectangleArea(length, width){
    return length * width;
}

const area1 = calculateRectangleArea(5, 3); // Output: Area 1: 15
console.log("Area 1: " + area1);

const area2 = calculateRectangleArea (7, 4); // Output: Area 2: 28
console.log("Area 2: " + area2);

function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
}

const today = new Date ();
const formattedDate = formatDate(today);
console.log("Formatted Date: " + formattedDate);

setTimeout(function (){
    console.log("Hello, world!");
}, 5000);

console.log("This message will be displayed first.");

function square(num){
    return num * num;
}
console.log(square(7));

function findFirstPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            return numbers[i];
        }
    }
    return null;
}

//console.log(findFirstPositive([-2, -1, 0, 3, 4]));

 console.log(findFirstPositive([-5, -3, -1]));

 function addNumbers(a, b) {
    const sum = a + b;
    return sum;
 }

 const result = addNumbers(3, 4);
 console.log(result);

 const people = {
    _age: 25,
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    }
 };

 function outerFunction() {
    let state = "";

    function innerFunction() {
        return `Information ${state}`;
    }
    
    return inner;
 }