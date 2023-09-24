"use strict";
function makeShirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Creating a ${size} shirt with the message: '${message}'`);
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'JavaScript is cool!');
