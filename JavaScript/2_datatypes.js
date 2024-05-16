/** @format */

//! Data Types :
/* JavaScript is a dynamically typed (also called loosely typed) scripting language. In JavaScript, variables can receive different data types over time.
The latest ECMAScript standard defines eight data types Out of which seven data types are Primitive(predefined) and one complex or Non-Primitive. */

/* There are two types of data types :
   1. Primitive Data Type
   2. Non-Primitive Data Type */

//? 1... Primitive Data Types :-> The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
// (Pre-defined Data Types)
/* there are also to be 5 types :
   1. String
   2. Boolean
   3. Number
   4. Undefined
   5. Null */

//* 1. String :
/* JavaScript Strings are similar to sentences. They are made up of a list of characters, which is essentially just an “array of characters, like “Hello Yash Tech etc. */
var str = "Hellow Shree!";
console.log(str);

//* 2. Boolean :
/* Represent a logical entity and can have two values: true or false. */
var bool = true;
console.log(bool);

//* 3. Number :
/* JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. Unlike other programming languages, you don’t need int, float, etc to declare different numeric values. */
var num = 34;
console.log(num);

//* 4. Undefined :
/* A variable that has not been assigned a value is undefined. */
var und;
console.log(und);

var undd = undefined;
console.log(undd);

//* 5. Null :
/* This type has only one value that is null. */
var nl = null;
console.log(nl);

//? 2... Non-Primitive Data Types :-> The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.s
// (Reference Data Types)
/* there are also to be 3 types :
   1. Object
   2. Array
   3. Functions */

//* 1. Object :
/* - The "object" is a complex data type that allows you to store collections of data.
   - An object contains properties, defined as a key-value pair.
   - A property key(name) is always a string but the value can b any data type, like as string, number, boolean or complex data types like array, function and other objects.
*/

var obj = {
  name: "Shree",
  age: 34,
  address: "Mathura",
};
console.log(obj);

//* 2. Array :
/* - An array is a type of object used for strong multiple values in single variable.
   - Array is a collection of values.
   - Each value is separated witha comma(,).
   - It is writting square breackets[].
   - The data types of array is object. */

var arr = [10, 20, 30, "Hello"];
console.log(arr);

//* 3. Function :
/* - The function is callable object that excuted a block of code.
   - Since functions are objects, so it's possible to assign them to variables. */

function fun() {
  console.log("Function Body");
}
fun();
