
//Q.47 What is the drawback of declaring methods directly in JavaScript objects ?

const obj = {
    name: "John",
    greet: function () {
        console.log(`Hello, ${this.name}!`);
        // Nested function
        setTimeout(function () {
            console.log(`Later, ${this.name}!`); // 'this' does not refer to 'obj'
        }, 1000);
    }
};

obj.greet();


// Output:
// Hello, John!
// Later, undefined!