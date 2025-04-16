


//Q.51 Write a JavaScript program to get the current date.Expected Output: mm - ddyyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy ?


function formatDate() {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0'); // Get the day
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get the month (0-11, so +1)
    const year = today.getFullYear(); // Get the year

    // Format in mm-dd-yyyy
    const format1 = `${month}-${day}-${year}`;

    // Format in mm/dd/yyyy
    const format2 = `${month}/${day}/${year}`;

    // Format in dd-mm-yyyy
    const format3 = `${day}-${month}-${year}`;

    // Format in dd/mm/yyyy
    const format4 = `${day}/${month}/${year}`;

    return { format1, format2, format3, format4 };
}

const currentDateFormats = formatDate();

console.log("mm-dd-yyyy:", currentDateFormats.format1);
console.log("mm/dd/yyyy:", currentDateFormats.format2);
console.log("dd-mm-yyyy:", currentDateFormats.format3);
console.log("dd/mm/yyyy:", currentDateFormats.format4);