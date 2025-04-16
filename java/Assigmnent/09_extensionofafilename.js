
//Q.9 Write a JavaScript exercise to get the extension of a filename.?
function getFileExtension(filename) {
    // Check if there's a dot in the filename
    if (filename.lastIndexOf(".") === -1) {
        return "No extension found";
    } else {
        // Get the part after the last dot (.)
        return filename.substring(filename.lastIndexOf(".") + 1);
    }
}

// Example usage:
const filename = "example.txt";
console.log("File extension: " + getFileExtension(filename));