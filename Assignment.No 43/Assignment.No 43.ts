function make_great(magiciansArray: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magiciansArray) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magicians(magiciansArray: string[]): void {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

let originalMagicians: string[] = ["Merlin", "Gandalf", "Houdini"];

// Call make_great() with a copy of the original array
let greatMagicians: string[] = make_great([...originalMagicians]);

console.log("Original magicians:");
show_magicians(originalMagicians);

console.log("\nMagicians with 'the Great':");
show_magicians(greatMagicians);
