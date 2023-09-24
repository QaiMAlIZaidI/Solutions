let magicians: string[] = ["Merlin", "Gandalf", "Houdini"];

function make_great1(magiciansArray: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let magician of magiciansArray) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magicians1(magiciansArray: string[]): void {
    for (let magician of magiciansArray) {
        console.log(magician);
    }
}

console.log("Original magicians:");
show_magicians1(magicians);

let greatMagiciansList = make_great1(magicians);

console.log("\nMagicians after adding 'the Great':");
show_magicians1(greatMagiciansList);
