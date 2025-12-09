console.log("String Methods in JS");

let message = "Hello World";

console.log(message.length); //length of string

console.log(message.toLowerCase())
console.log(message.toUpperCase())

console.log(message.indexOf("World"))

console.log(message.slice(0,5)) //Extracting subrstring from index 0 to 5 (start is inclusive, end is exclusive)

console.log(message.replace("Hello", "Bye"))

console.log(message.split(' ')) //Split string into array on space

console.log(message.includes("World")); //Check if substing exists