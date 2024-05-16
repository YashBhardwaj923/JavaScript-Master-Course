/** @format */

//! Variables :
/* Variables are used to store data in JavaScript. Variables are used to store reusable values. The values of the variables are allocated using the assignment operator(“=”).

JavaScript assignment operator is equal (=) which assigns the value of the right-hand operand to its left-hand operand.

JavaScript Identifiers
JavaScript variables must have unique names. These names are called Identifiers.

Basic rules to declare a variable in JavaScript:
   These are case-sensitive
   Can only begin with a letter, underscore(“_”) or “$” symbol
   It can contain letters, numbers, underscore, or “$” symbol
   A variable name cannot be a reserved keyword.
*/

//* Variables can be declared by three "keyword" :
//? 1. var
//? 2. let
//? 3. const

//? 1. "var" keyword :
//- Declare a variable in the global scope (accessible anywhere)
/* "var" is the oldest keyword to declare a variable in javascript.
   The scope of a "var" is function and global scope.
   It can be update & re-declared into the scope.
   It can be declared without initialization. */

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
/* "let" keyword is a improve version of the "var" keyword.
   It introduced in 2015 (ES6).
   The scope of a "let" is only block scope.
   It can't accessible outside the particular block like as {}.
   It can be update but can't re-declared into the scope.
   It can be declared without initialization. */

let y;
console.log(y);

let x = "Hello Shree";
console.log(x);

x = "Re-assign value";
console.log(x);

//? 3. "const" keyword :
//- Declare a constant variable which cannot be reassigned. It is always immutable i.e., once initialized, you cannot change its value.
/* "const" is a latest version of the javascript.
   It introduced in 2015 (ES6)
   The scope of a "const" is also block scope.
   It can't update & re-declared.
   It can't be decalred without initialization.
   IT means user can't be update the const variable once is declared.
 */

const l = "Constant Data";
console.log(l);
