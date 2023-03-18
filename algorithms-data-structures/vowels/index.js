// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = string => {
    const matches = string.match(/[aeiou]/gi);

    return matches?.length || 0;
};

module.exports = vowels;

// Solution 1 (my solution)
// const vowels = string => {
//     let vowelCount = 0;
//
//     for (let letter of string) {
//         if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
//             vowelCount++;
//         }
//     }

//     return vowelCount;
// };