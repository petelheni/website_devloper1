
//Q.46 Write a JavaScript program to clone an array ?

function cloneArrayUsingSlice(arr) {
    return arr.slice();
}

// Example usage
const originalArray1 = [1, 2, 3, 4, 5];
const clonedArray1 = cloneArrayUsingSlice(originalArray1);

console.log('Cloned Array using slice:', clonedArray1); // Output: [1, 2, 3, 4, 5]
console.log('Are they the same array?', originalArray1 === clonedArray1);

// Output: false