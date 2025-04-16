
//Q.24 Write to print Fibonacci series up to given numbers ?


function fibonacciSeries(n) {
    let fib = [0, 1];  // Initial two numbers of the Fibonacci sequence

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Add the two previous numbers to get the next one
    }

    return fib.slice(0, n);  // Return the series up to the nth number
}

// Example usage:
let num = 10;  // Change this to the number of terms you want
console.log(`Fibonacci series up to ${num} terms: `, fibonacciSeries(num));