"use strict";
const string1 = "hello";
const string2 = "world";
const string3 = "hello";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true
console.log(string1 === string3); // true
console.log(string2 !== string3); // false
const text = "Hello World";
const lowercaseText = text.toLowerCase();
console.log(lowercaseText === "hello world"); // true
console.log(lowercaseText !== "Hello World"); // false
const x = 10;
const y = 20;
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
const age = 25;
const isStudent = true;
const hasJob = false;
console.log(age > 18 && isStudent); // true
console.log(age > 30 && isStudent); // false
console.log(age > 18 || hasJob); // true
console.log(age < 20 || hasJob); // false
const fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("kiwi")); // false
console.log(!fruits.includes("orange")); // false
console.log(!fruits.includes("grape")); // false
const colors = ["red", "blue", "green", "yellow"];
console.log(colors.includes("red")); // false
console.log(colors.includes("purple")); // true
console.log(colors.includes("green")); // true
console.log(colors.includes("blue")); // true
