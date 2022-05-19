// function composition 

let input = "   JS      "
const trim3 = str => str.trim();
const wrap = str => `<div>${str}</div>`;
const lower = str => str.toLowerCase();
console.log(wrap(trim3(lower(input))))


// lodash make it easier to compose function instead of having all the ))))
const {compose, pipe} =  require("lodash/fp")

// executes from right to left
const compo  = compose (wrap,lower,trim3 );
console.log(compo(input));


// executes in order
const pip  = pipe (trim3,lower,wrap );
console.log(pip(input));



// normal
function add(a,b){
    return a+b;
}
console.log(add(1,2));

// currying long way
function add_curry(a){
    return function(b){
        return a+b;
    }
}
// ESC currying
const add_curry2 = a => b => a+b; 
console.log(add_curry2(1)(3));


// pure function
// this is a function that returns the same value every single time a function is called
// no random values, no current date/time, no global state (DOM, files, DB, etc)
// we can cache pure functions
// reducers are pure


// updating objects
const person = {"name" : "Adrian"};
const updated = Object.assign({}, person, {"name" : "Bob" , "age" : 40})
console.log(updated);

// better way with the spread operator
const updated2 = {...person, "age" : 25}
console.log(updated2);


// adding to arrays
const arr = [1,2,3];
const arr2 = [...arr,4]
console.log(arr2);

// removing from arrays  
const arr3 = arr.filter(n => n != 2)
console.log(arr3);

//updating arrays
const arr4 = arr.map(n => n === 2 ? 20 : n);


// immutable JS
const {Map}  = require('immutable');
let book = Map({name : "adrian"});

console.log(book.get("name"));
book = book.set("name", "Bob")
console.log(book.toJS());

