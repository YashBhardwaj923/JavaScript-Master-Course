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
var str = "Hellow Shree!";
console.log(str);

//* 2. Boolean :
var bool = true;
console.log(bool);

//* 3. Number :
var num = 34;
console.log(num);

//* 4. Undefined :
var und;
console.log(und);

var undd = undefined;
console.log(undd);

//* 5. Null :
var nl = null;
console.log(nl);

//? 2... Non-Primitive Data Types :-> The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.s
// (Reference Data Types)
/* there are also to be 3 types :
   1. Object
   2. Array
   3. Functions */

//* 1. Object :
var obj = {
  name: "Shree",
  age: 34,
  address: "Mathura",
};
console.log(obj);

//* 2. Array :
var arr = [10, 20, 30, "Hello"];
console.log(arr);

//* 3. Function :
function fun() {
  console.log("Function Body");
}
fun();
