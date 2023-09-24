type ShirtSize = 'small' | 'medium' | 'large';

function makeShirt(size = 'large', message = 'I love TypeScript'): void {
  console.log(`Creating a ${size} shirt with the message: '${message}'`);
}

makeShirt();
makeShirt('medium');
makeShirt('small', 'JavaScript is cool!');
