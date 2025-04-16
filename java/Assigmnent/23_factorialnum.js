
//Q.23 Write to print factorial of given number ?

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
let number = 5; // Change this to the number you want
console.log(`Factorial of ${number} is ${factorial(number)}`);