const currentUsers = ['john', 'emma', 'alex', 'sarah', 'david'];

const newUsers = ['Alex', 'jane', 'michael', 'John', 'olivia'];

for (const newUser of newUsers) {
    const isTaken = currentUsers.some(currentUser =>
        currentUser.toLowerCase() === newUser.toLowerCase()
    );

    if (isTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
