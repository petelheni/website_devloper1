

//Q.35 Write a JavaScript program to capitalize first letter of a string ?

function capitalizeFirstLetter(str) {
    // Check if the string is empty
    if (str.length === 0) return '';

    // Capitalize the first letter and concatenate it with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage
const inputString = "hello, world!";
const capitalizedString = capitalizeFirstLetter(inputString);
console.log(capitalizedString);

// Output: "Hello, world!"