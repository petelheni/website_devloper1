

// Q.17 Write find maximum number among 3 numbers using ternary operator in JS?

const a = 10;
const b = 20;
const c = 15;

const max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

console.log(max);