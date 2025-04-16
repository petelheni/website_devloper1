//Q.20 Write to show
//i.Monday to Sunday using switch case in JS ?

function getDayName(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Invalid day';
    }

    return dayName;
}

// Example: days from Monday to Sunday
for (let i = 1; i <= 7; i++) { console.log(getDayName(i)); }