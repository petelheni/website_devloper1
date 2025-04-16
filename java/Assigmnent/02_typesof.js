//Q.2 Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

let strValue = '10';
let numValue = 10;

// Check if they are exactly equal
if (typeof strValue === typeof numValue && strValue === numValue) {
    console.log("They are exactly equal.");
} else {
    console.log("They are not exactly equal.");

    // Convert strValue to a number to make it exactly equal
    strValue = Number(strValue);

    // Now they are exactly equal
    if (strValue === numValue) {
        console.log("Now they are exactly equal:", strValue === numValue);
    }
}