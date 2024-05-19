/** @format */

//!JS Operators
/*In JavaScript, an operator is a specical symbol used to perform operations on operands(values & variables).
  We can say that an operator operates the operands. 
  In JavaScript operators are used for compare values, perform arthimetic operations etc..
operad:- An operand can be a constant, a variable or a function result.
operator:- An operators are arithmetic, logical and relational...

OOO ==> Operator Operates the Operands.
    
==> there are various operators supported by JavaScript:
> 1. Arithmetic Operators
> 2. Comparision Operators
> 3. Logical Operators
> 4. Assignment Operators
> 5. Ternary Operators
> 6. typeOf Operators */

/*1.) Arithmetic Operators:- 
    -These operators are used to perform arithmetic calculations.
   there are difference types:-  
  OPERATORS            NAME                 SYNTAX
      +              addition                a+b
      -             subtraction              a-b
      *            multiplication            a*b
      /              division                a/b
      %          (modulus)remainder          a%b
      ++            increment                a++ or  ++a
      --            decrement                a-- or  --a
      **        exponentiotion(power)        a*b  */

// Examples :->
//* addition -->>
let a = 10;
let b = 30;
console.log(a + b);

let x = "Hello";
let y = " Shree";
console.log(x + y);
//note : concatination.

console.log("Aushi" + 34);

console.log(10 + "Hello");

console.log(1 + 2 + 3 + 4 + "5");

console.log("5" + 4 + 3 + 2 + 1);

console.log(undefined + undefined); // output : NaN => Not a Number

console.log(null + null); // output : 0

console.log(true + true); // 2

console.log(true + false); // 1

//* subtraction -->>
let l = 45;
let m = 30;
console.log(l - m);

console.log("Hello" - 34); // output : NaN

console.log("Hello" - "Hello"); // output : NaN

console.log(true - true);
//note : here, true -> 1 and false -> 0

console.log(true - 1);

//* multiplication -->>
let o = 7;
let p = 6;
console.log(o * p);

console.log(true * 5);

console.log(true * false);

console.log(null * 5); // output : 0

console.log("Hello" * 6); // output : NaN

//* division -->>
let q = 8;
let r = 2;
console.log(q / r);

console.log(true / false); // output : Infinity

console.log("Hello" / 7); // output : NaN

//* (modulus)remainder -->
let s = 9;
let t = 3;
console.log(s % t);

console.log(55 % 7);

//* increment -->
let u = 5;
u++;
console.log(u);

//* decrement -->
let v = 8;
v--;
console.log(v);

//* exponentiotion(power) -->
console.log(3 ** 2);

console.log(5 ** 5);

/*2.)Comparison Operator:-
   -the comparison operators are mainly used to perform the logical operations that determine the equality or difference between the values.  
  there are different types:- 
   OPERATORS           NAME                       SYNTAX
      ==             equal to                      x=y
      ===        equal value & equal datatype      x===y
      !=            not equal                      x!=y
      !==        not equal value & datatype        x!==y
      >             greater than                   x>y
      <             less than                      x>y
      >=         greater than & equalto            x>=y
      <=         less than & equalto               x<=y */

// Examples :
//* equals to (==) [double equal] -->
var e = 20;
var f = "20";
console.log(e == f);

//* equal value & data type (===) -->
console.log(e === f);

//* not equal (!=) -->
var ab = 7;
var cd = "7";
console.log(ab != cd);

//* not equal value & data type (!==) -->
console.log(ab !== cd);

//* greater then (>) -->
console.log(10 > 6);

//* less then (<) -->
console.log(9 < 4);

//* greater then equal (>=) -->
console.log(10 >= 10);

//* less then equal (<=) -->
console.log(20 <= 20);

/*3.) Logical Operator:- 
   logical operators operates an boolean expressions to combine the result of these boolean expression into a single boolean value.
 there are different types:- 
   OPERATOR           NAME                CONDITION
     &&           logical AND        if(condition1 && condition2){ statement }
     ||           logical OR         if(condition1 || condition2){ statement }
     !            logical NOT        if(! condition){ statement } */

// Examples :
//* Logical "AND" -->
let age = 60;
if (age >= 18 && age <= 50) {
  console.log("eligible for voting");
} else {
  console.log("not eligible for voting");
}

//* Logical "OR" -->
let salary = 100000;
if (salary == 100000 || salary == 200000) {
  console.log("you get bonus");
} else {
  console.log("no bonus");
}

//* Logical "NOT" -->
let isMarried = false;
if (!isMarried) {
  console.log("You can apply for loan");
} else {
  console.log("Sorry you are married, You cannot apply for loan");
}

/*4.) Assignment Operator:- 
   The simple assignment operator (=) is used to assign a value to a variable.
   The Assignment operator is  equal (=) which assigns the value of right-hand operand to its left-hand operand.
   That is if a = b assigns the value of b to a.  
 there are so many types:- 
    NAME                   OPEARTOE      SHORTHAND      MEANING
 addition ass.                +=           a+=b          a=a+b
 subtraction ass.             -=           a-=b          a=a-b
 multipli. ass.               *=           a*=b          a=a*b
 division ass.                /=           a/=b          a=a/b
 remainder ass.               %=           a%=b          a=a%b
 exponentiation ass.          **=          a**=b         a=a**b
 left shift                   <<=          a<<=b         a=a<<b
 right shift                  >>=          a>>=b         a=a>>b
 bitwise AND                  &=           a&=b          a=a&b
 bitwise OR                   |=           a|=b          a=a|b
 bitwise XOR                  ^=           a^=b          a=a^b */

// Example:
//* addition ass. (+=)
let asin = 10;
asin += 5; // same as saying asin = asin + 5
console.log(asin);

//* subtraction ass. (-=)
let dsub = 36;
dsub -= 8; // same as saying dsub = dsub - 8
console.log(dsub);

//* multipli. ass. (*=)
let mult = 2;
mult *= 9; // same as saying mult = mult * 9
console.log(mult);

//*  division ass. (/=)
let divi = 10;
divi /= 2; // same as saying divi = divi / 2
console.log(divi);

//*  remainder ass. (%=)
let rem = 7;
rem %= 4; // same as saying rem = rem % 4
console.log(rem);

//* exponentiation ass. (**=)
let exp = 2;
exp **= 3; // same as saying exp = exp ** 3
console.log(exp);

/*5.) Ternary Opearators:-
    The ternary operator is a simplified conditional operator like:if/else.  
    “Question mark” or “conditional” operator in JavaScript is a ternary operator that has three operands.
     The expression consists of three operands: the condition, value if true and value if false.
     The evaluation of the condition should result in either true/false or a boolean value.
     The true value lies between “?” & “:” and is executed if the condition returns true.
     Similarly, the false value lies after “:” and is executed if the condition returns false.
      
     syntax:-    condition ? value if true : value if false */

// Examples :
let days = 1;
let showDay =
  days === 1
    ? "Monday"
    : days === 2
    ? "Tuesday"
    : days === 3
    ? "Wednesday"
    : days === 4
    ? "Thursday"
    : days === 5
    ? "Friday"
    : days === 6
    ? "Saturday"
    : days === 7
    ? "Sunday"
    : "Please Enter Valid Day!";
console.log(showDay);

let auu = 12;
let allow = auu >= 18 ? "You are eligible for voting" : "No!";
console.log(allow);

/*6.) typeOf Operator:- */

// Examples :
console.log(typeof 10);

console.log(typeof "Hello");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof {});

console.log(typeof []);

console.log(typeof function () {});
