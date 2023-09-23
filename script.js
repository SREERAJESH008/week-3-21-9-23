`use strict`;

// 1.. Declare an array called fruits containing the names of three different fruits. Then, write a function printFruits that takes the fruits array as an argument and prints each fruit to the console.
// const fruits = ["apple", "banana", "orange"];
// function printFruits(fruitArray) {
//   // Your code here
// }
// Test Case
// printFruits(fruits); // Should print "apple", "banana", "orange"

// const fruits = ["apple", "banana", "orange"];

// function printFruits(fruitArray) {
//   for (let fruit of fruitArray) {
//     console.log(fruit);
//   }
// }

// printFruits(fruits);

// 2. Declare three variables: name (a string), age (a number), and isStudent (a boolean). Assign values
// to these variables and then print them to the console.
// // Your code here (declare and assign variables)
// console.log(name);
// console.log(age);
// console.log(isStudent);

// let Name=  `Rajesh`
// let age= `23`
// let isStudent = true;

// console.log(Name);
// console.log(age);
// console.log(isStudent);

// 3. Write a function add that takes two numbers as arguments and returns their sum.

// // Test Cases
// console.log(add(5, 3)); // Should return 8
// console.log(add(-2, 7)); // Should return 5
// console.log(add(0, 0)); // Should return 0

// function add(a, b) {
//   const addition = a + b;
//   console.log(addition);
// }
// add(5, 3);

// function sum(a, b) {
//   const subtraction = a - b;
//   console.log(subtraction);
// }

// sum (5, 3);

// function sum(a, b) {
//   const multiply = a * b;
//   console.log(multiply);
// }

// sum(0, 0);

// 4. Write a function reverseString that takes a string as input and returns the string reversed.
// function reverseString(str) {
//   // Your code here
// } 
// // Test Cases
// console.log(reverseString("Hello")); // Should return "olleH"
// console.log(reverseString("JavaScript")); // Should return "tpircSavaJ"
// console.log(reverseString("12345")); // Should return "54321"



// function reverseString(str) {
//   let reversed = "Hello";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }


// console.log(reverseString("Hello"));

// function reverseString(str) {
//   let reversed = "JavaScript";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("JavaScript")); 

// function reverseString(str) {
//   let reversed = "12345";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("12345"));


// 5. Write a function findMax that takes an array of numbers as input and returns the largest number in the array.
// function findMax(numbers) {
//   // Your code here
// }
// // Test Cases
// console.log(findMax([5, 2, 9, 1, 5])); // Should return 9
// console.log(findMax([-3, -11, -2, -7])); // Should return -2
// console.log(findMax([42])); // Should return 42 

// function findMax(numbers) {

//   let max = [5, 2, 9, 1, 5];
//   for (let i = 0; i < numbers .length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([5, 2, 9, 1, 5])); 

// function findMax(numbers) {

//   let max = [5, 2, 9, 1, 5];
//   for (let i = 0; i > numbers .length; i++) {
//     if (numbers[i] < max) {
//       max = numbers[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([-3, -11, -2, -7])); 

// 6. Create an object called person with properties name, age, and city. Then, write a function printPerson that takes the person object as input and prints out a message like "John is 30 years old and lives in New York."

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
 
// function printPerson(person) {
//   // Your code here
// }
// // Test Case
// printPerson(person); // Should print "John is 30 years old and lives in New York."

// const person = {
//   name: "John",
//   age: 30,
//   city: "Delhi"
// };

// function printPerson(person) {
//   console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
// }
// printPerson(person); 

// 7. Write a function isEven that takes a number as input and returns true if the number is even and false if it's odd.
// function isEven(number) {
//   // Your code here
// }
// // Test Cases
// console.log(isEven(4)); // Should return true
// console.log(isEven(7)); // Should return false
// console.log(isEven(0)); // Should return true

// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(isEven(4)); 
// console.log(isEven(7)); 
// console.log(isEven(0)); 

// 8. Write a function sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.
// function sumArray(numbers) {
//   // Your code here
// }
// // Test Cases
// console.log(sumArray([1, 2, 3, 4, 5])); // Should return 15
// console.log(sumArray([-1, 0, 1])); // Should return 0
// console.log(sumArray([])); // Should return 0

// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5])); 

// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }
// console.log(sumArray([-1, 0, 1]));
   
// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }        
// console.log(sumArray([]));  













