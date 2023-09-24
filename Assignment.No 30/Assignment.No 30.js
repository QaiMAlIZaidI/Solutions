"use strict";
let usernames = ["Ali", "Ahmad", "Faizan", "Admin"];
for (let username of usernames) {
    if (username === "Admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}
