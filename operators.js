// console.log(firstName)
// let PI = 4

// Arithmetic Operators
console.log("=============== Arithmetic Operators =============");
let x = 10;
let y = 6;

console.log("Addition", x + y);
console.log("Subtraction", x - y);
console.log("Multiplication", x * y);
console.log("Division", x / y);
console.log("Modulus:", x % y) // Remainder of division
console.log("Exponentiation", x**y) // x raised to the power of y

// Increment with ++ & Decrement --
let counter = 0;
counter++;
counter++;
counter += 1;
counter = counter + 1;
console.log("Counter Value:", counter)

counter--;
console.log("Counter value after decrement:", counter)


// Comparison Operators (Product a boolean)
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);

let letterA = '10';
let letterB = 10;

console.log(letterA == letterB) //(loose equality)
console.log(letterA === letterB) //(strict equality)

// String Operators
let fName = "John"
let lName = "Doe"

let literal = `${fName} ${lName}`

literal += " Jr."; //Appending to an existing string
console.log(literal)

// Odd Behaviors in JavaScript
let sumTotal = '5' + 10
console.log(sumTotal)
console.log(typeof sumTotal)

