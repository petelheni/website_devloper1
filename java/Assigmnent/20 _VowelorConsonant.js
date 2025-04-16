//Q.20 Write to show
//ii.Vowel or Consonant using switch case in JS ?

function checkVowelOrConsonant(char) {
    let result;

    // Convert the character to lowercase to handle both uppercase and lowercase inputs
    char = char.toLowerCase();

    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = char + " is a vowel";
            break;
        default:
            // Check if input is a letter
            if (char >= 'a' && char <= 'z') { result = char + " is a consonant"; } else {
                result = "Invalid input, please enter a letter.";
            }
    } return result;
}

// Example usage let letter='E' ;
console.log(checkVowelOrConsonant(letter));