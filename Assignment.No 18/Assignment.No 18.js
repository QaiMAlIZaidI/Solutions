"use strict";
// Store the locations in an array (not in alphabetical order)
const placesToVisit = [
    "Paris",
    "Tokyo",
    "Bali",
    "New York",
    "Sydney"
];
// Print the original order
console.log("Original order:", placesToVisit);
// Print in alphabetical order without modifying the list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show original order (unchanged)
console.log("Original order (unchanged):", placesToVisit);
// Print in reverse alphabetical order without changing the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Show original order (unchanged)
console.log("Original order (unchanged):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order again to restore it
placesToVisit.reverse();
console.log("Original order (restored):", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order (sorted):", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order (sorted):", placesToVisit);
// console.log("Reverse alphabetical order (sorted):", placesToVisit.sort().reverse());
