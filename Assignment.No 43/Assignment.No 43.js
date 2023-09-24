"use strict";
function make_great(magiciansArray) {
    let greatMagicians = [];
    for (let magician of magiciansArray) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magiciansArray) {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}
let originalMagicians = ["Merlin", "Gandalf", "Houdini"];
// Call make_great() with a copy of the original array
let greatMagicians = make_great([...originalMagicians]);
console.log("Original magicians:");
show_magicians(originalMagicians);
console.log("\nMagicians with 'the Great':");
show_magicians(greatMagiciansList);
