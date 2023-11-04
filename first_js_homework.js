//--------------SECTION 1
/*
What does the acronym DRY stand for?
    DRY stands for DO NOT REPEAT YOURSELF.

Why should we pay attention to it?
    It allows us to avoid repetition of code and also provides easy code maintanance.

What programming tools have we learned to write DRY code?
    Loops: While and For, conditional statements, postfix operators: e.g. i++, Compound assignment operator +=.

What is the difference between const and let and var?
    Const declares a value that cannot be changes, when let variables are oppsites and it can be
    overriden anywhere in the code. Var is sinilar to let but it allows hoisting behaviour what can be trouble 
    if it is used somewhere in the middle of the code.*/

//  Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)
//  Test your answers by using console.log for each expression in your answer file.

//--------------SECTION 2

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

a < b;
c > d;
"Name" == "Name";
a + b == c;
a * a == d;
e != "Kevin";
48 == "48";
f != e;

//Set a new variable g to 0
g = 0;

//logging variable
console.log(g);

//Then set the variable g to be equal to b + c
g = b + c;
//10 = g
//logging variable
console.log(g);

/*Did you use const, let or var? Why did you choose the one you chose?
    I used let because g is variable that should have reassignment

What happens if you don't use const , let or var? Do you get an error? If so what does it say?
    Code runs, as JS allows to use variable w/o const , let or var, but the value should be assigned.

what happens if you write 10 = g?
    We should use right-hand assignement of variable, otherwise an exaception is thrown: 
    SyntaxError: Invalid left-hand side in assignment*/

//Bonus Challenge (optional): Replace the underscores to make a Boolean expression that
//evaluates to true. Use no more than one of the following: > , < !== and ===.

(a !== (b || f)) == !f && e != c;

//log result
console.log((a !== (b || f)) == !f && e != c);

//--------------SECTION 3

/*While loops

Answer:

Is the code below an infinite loop? Why or why not?
Don't worry about getting it 'wrong' - you'll be graded on your reasoning, not if your ultimate answer is correct.
You should NOT test (run) this code, so read it line by line and 'execute' the code in your head.

while (true) {
	console.log('Do not run this loop');
}

    This is infinite loop, as the conditional part of the while loop is always true, and while loop will keep executing untill condition is true;

Infinite loop II
is this loop an infinite loop? Why or why not?

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
Answer:
Infinite or not infinite? What is the expected output?

    This loop will stop execution after first run as it will reassign value of runProgram to false after console.log('Do not run this loop'),
 and it will have only one output in console: << Do not run this loop >>
-----------------------------

 The following while loop uses a compound assignment operator, i.e. +=
Without running this loop, what is the expected output?
Read the code line by line-- everything happens in sequence. Write down what you think the code will log in the Terminal
 by adding comments before each line of code, explaining what that line of code will do. Be patient with your thought! There is no rush.

Example:

let q = 20;

// start a while loop that will run as long as q is greater than 10
while (q > 10){
  // prints the value of q to the screen/Terminal window
  console.log(q)
  // decrements the value of q by 1
  q--
// closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}
    */
//declare and assign variable letters
let letters = "A";
//declare and assign variable i
let i = 0;
// start while loop that will run untill i less than 20
while (i < 20) {
  // adds vallue to letters, in this case string concatenation occurs
  letters += "A";
  // increments value of i by 1
  i++;
  // closes the while loop, the code inside this loop will keep running until the while condition is evaluated to false
}

console.log(letters);

/* Write another sentence confirming whether the code was what you expected. 

        Yes, the code did what I expected, it printed a string that has length of 20 character of letter 'A'.
*/

//--------------SECTION 4

/*What are the three components of the control panel? Each component is separated by a semicolon ;.

The first part of the control panel is: initial condition, usually numeric value that defines where to start the loop
The second part of the control panel is: while condition under which the loop will be executing untill false
The third part of the control panel is: incrementing of the initial condition*/

// For loop II
//Write a for loop that will console.log the numbers 0 to 999.

for (let i = 0; i < 1000; i++) {
  console.log(i);
}

//Bonus Challenge (optional):

//What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?

//In this case we use string interpolation and to be able to use apastrofe in our text we use backslash
console.log("Without you, today's emotions are the scurf of yesterday's");

//Here we log regular string in double quotes so it does not require backslash for single quotes
console.log("Without you, today's emotions are the scurf of yesterday's");

// For loop in reverse

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (let i = 999; i >= 0; i--) {
  console.log(i);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
//The loop should run from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log("The value of i is: " + i + " of 10");
}

//------------Bonus Challenge (optional):

//Rewrite the above loop using String Interpolation/Template Literals instead of concatenation
for (let i = 0; i <= 10; i++) {
  console.log(`The value of ${i} is: i of 10`);
}

//Iteration

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

//Iterate over the StarWars array and print each element to the console.

for (let i = 0; i < StarWars.length; i++) {
  console.log(StarWars[i]);
}

//Iterate over the StarWars array again and print each character's name as well as the value of i.

for (let i = 0; i < StarWars.length; i++) {
  console.log(
    `Each character's name is ${StarWars[i]} and the value of i is ${i}`
  );
}

//Bonus Challenge (optional):

//Figure out how to iterate over every second element of the StarWars array, starting with the first element.
//=> Han, R2D2, Leia

for (let i = 0; i < StarWars.length; i += 2) {
  console.log(StarWars[i]);
}
