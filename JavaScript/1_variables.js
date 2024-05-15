/** @format */

//! Variables :
//* Variables are containers for storing data/values.

//* Variables can be declared by three "keyword" :
//? 1. var
//? 2. let
//? 3. const

//? 1. "var" keyword :
//- Declare a variable in the global scope (accessible anywhere)
var a;
console.log(a);

var a = 10;
console.log(a);

/* explaination :-
   var => keyword
   a   => variable
   =   => assignment operator
   10  => value
   ;   => line break
   console.log() => for show output */

//? 2. "let" keyword :
//- Declare a variable in the local scope (only accessible within its block, not outside of it).
let y;
console.log(y);

let x = "Hello Shree";
console.log(x);

x = "Re-assign value";
console.log(x);

//? 3. "const" keyword :
//- Declare a constant variable which cannot be reassigned. It is always immutable i.e., once initialized, you cannot change its value.
const l = "Constant Data";
console.log(l);
