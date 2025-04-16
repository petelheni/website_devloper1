
//Q.34 Write a JavaScript program to convert an array of objects into CSV string ?

const data = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "San Francisco" },
    { name: "Mike", age: 35, city: "Chicago" }
];

const csvString = convertToCSV(data);
console.log(csvString);