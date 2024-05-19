/** @format */

//! Control Flow Statements :->
// -there are two types in JavaScript :
/* 1. Conditional Statements
   2. Looping Statements */

//* 1... Conditional Statements :
/* there are also to be different types :
   1. "if" statement 
   2. "if...else" statement
   3. "if...else if" statement
   4. "switch" statement */

//? 1... "if" statement :-->
/* The if statement is the fundamental control statement that allows JavaScript to make decisions and execute statements conditionally. */

if (true) {
  console.log("True Section");
}

let age = 18;
if (age >= 18) {
  console.log("Your are Eligible...");
}

//? 2... "if...else" statement :-->
/* The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way. */

let year = 2023;
if (year === 2024) {
  console.log("Yes, It's 2024th Sen...");
} else {
  console.log("No, It's Not 2024th Sen...");
}

//? 3. "if...else if" statement :-->
/* The if...else if... statement (also called as if...else ladder)is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions. */

let day = 6;
if (day == 1) {
  console.log("Today's Day Monday");
} else if (day == 2) {
  console.log("Today's Day Tuesday");
} else if (day == 3) {
  console.log("Today's Day Wednesday");
} else if (day == 4) {
  console.log("Today's Day Thursday");
} else if (day == 5) {
  console.log("Today's Day Friday");
} else if (day == 6) {
  console.log("Today's Day Saturday");
} else if (day == 7) {
  console.log("Today's Day Sunday");
} else {
  console.log("Please Enter Valid Day Number !");
}

//? 4. "switch" statement :-->
/* JavaScript switch statement provides a way to execute different code blocks based on different conditions. It’s an alternative to using multiple if...else if...else statements when you have multiple conditions to check. */

let month = 4;
switch (month) {
  case 1:
    console.log("It's January!");
    break;
  case 2:
    console.log("It's February!");
    break;
  case 3:
    console.log("It's March!");
    break;
  case 4:
    console.log("It's April!");
    break;
  case 5:
    console.log("It's May!");
    break;
  case 6:
    console.log("It's June!");
    break;
  case 7:
    console.log("It's July!");
  case 8:
    console.log("It's August!");
    break;
  case 9:
    console.log("It's Sepetember!");
    break;
  case 10:
    console.log("It's October!");
    break;
  case 11:
    console.log("It's November!");
    break;
  case 12:
    console.log("It's December!");
    break;
  default:
    console.log(`It's ${month}th Month!`);
}

//* 2... Looping Statements :
/* Looping in programming languages is a feature that facilitates the execution of code blocks repeatedly until some condition becomes false. In this article, we will cover for loop which provides a brief and systematic way of writing the loop structure. */

/* there are also to be different types :
   1. "do...while" loop
   2. "while" loop
   3. "for" loop
 */

/* Basically there are mainly two types of loops: 
  1. Entry Controlled loops : "while loop" & "for loop" 
  2. Exit Controlled loops : "do...while loop" */

//? 1... "do...while" loop :-->
/* A do… while loop in JavaScript is a control statement in which the code is allowed to execute continuously based on a given boolean condition. It is like a repeating if statement.

The do…while loop can be used to execute a specific block of code at least once */

let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter <= 5);

//? 2... "while" loop :-->
/* In JavaScript, a while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true. */

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//? 3... "for" loop :-->
/* JavaScript for loop is used to iterate the elements/code block a fixed number of times. It is used if the number of the iteration is known.

for statement creates the loop that accepts three optional expressions and a code block that will be executed in a loop. */

for (let i = 1; i <= 7; i++) {
  console.log("for loop - ", i);
}

//? BREAK & CONTINUE :==>
/* JavaScript break statement is used to terminate the execution of the loop or the switch statement when the condition is true. */
/* The continue statement in Javascript is used to break the iteration of the loop and follow with the next iteration.  */

let x = 1;
while (x <= 5) {
  console.log(x);
  x++;
  if (x == 3) {
    break;
  }
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

/* HOME Work :->
   Q1. conditional statements ka use karke ek program banana hai, jo ki time par depend hoga:
       06:00 am to 11:00 am => Good Morning (BreakFast)
       12:00 pm to 03:00 pm => Good Afternoon (Lunch)
       04:00 pm to 09:00 pm => Good Night (Dinner)
       09:00 pm to 12:00 pm => Sweet Dreams.

   Q3. make a "temperature calulator" using "switch" & "if...else if" statements.
       
   Q3. make a 2's table, 5's table, 7's table using "do...while", "while" & "for" loop. */

// Solution 1:->
/* in this solution, we are using "prompt()" and "parsInt()". 
  "prompt()" -> for taking user input.
  "parsInt()" -> convert string to number. */

let time = prompt("Please Enter Time", "Ex: 0 to 12");
let zone = prompt("Please Enter Zone", "Ex: am or pm");

if (zone === "am") {
  if (time >= 0 && time <= 12) {
    console.log("Good Morning, Have a Nice Day!");
  }
} else if (zone === "pm") {
  if (time >= 1 && time < 4) {
    console.log("Good After Noon");
  } else if (time > 4 && time <= 9) {
    let ask = prompt("Choose AnyOne", "No Sleep & Sleep");
    if (ask === "No Sleep") {
      console.log("Good Evening!");
    } else if (ask === "Sleep") {
      console.log("Good Night Bro!");
    }
  }
}
