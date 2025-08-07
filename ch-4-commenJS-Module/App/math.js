// This module exports a function that adds two numbers
function add (...num) {
    return num.reduce((acc, curr) => acc + curr, 0);
}

// This module for exports a function that mutiplies two numbers.
function multiply (...num) {
    return num.reduce((acc, curr) => acc * curr, 1);
}
module.exports = {
    add: add,
    multiply: multiply
}