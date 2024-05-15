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
if (true) {
  console.log("True Section");
}

let age = 18;
if (age >= 18) {
  console.log("Your are Eligible...");
}

//? 2... "if...else" statement :-->
let year = 2023;
if (year === 2024) {
  console.log("Yes, It's 2024th Sen...");
} else {
  console.log("No, It's Not 2024th Sen...");
}

//? 3. "if...else if" statement :-->
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
/* there are also to be different types :
   1. "do...while" loop
   2. "while" loop
   3. "for" loop
   4. "for...in" loop
   5. "for...of" loop */

//? 1... "do...while" loop :-->
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter <= 5);

//? 2... "while" loop :-->
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//? 3... "for" loop :-->
for (let i = 1; i <= 7; i++) {
  console.log("for loop - ", i);
}

//? BREAK & CONTINUE :==>
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
