"use strict";
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let _number of ordinal) {
    let ordinal = '';
    if (_number === 1) {
        ordinal = 'st';
    }
    else if (_number === 2) {
        ordinal = 'nd';
    }
    else if (_number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${_number}${ordinal}`);
}
