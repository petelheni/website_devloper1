
//Q. 45 Write a JavaScript program to determine if a variable is array ?

function isArray(variable) {
    return Array.isArray(variable);
}

// Example usage
const test1 = [1, 2, 3];
const test2 = "Hello, World!";
const test3 = { name: "John", age: 30 };
const test4 = null;
const test5 = 42;

console.log(isArray(test1)); // Output: true
console.log(isArray(test2)); // Output: false
console.log(isArray(test3)); // Output: false
console.log(isArray(test4)); // Output: false
console.log(isArray(test5)); // Output: false