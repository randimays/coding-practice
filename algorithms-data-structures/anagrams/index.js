// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = string => {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};

const anagrams = (stringA, stringB) => {
    return cleanString(stringA) === cleanString(stringB);
};

module.exports = anagrams;

// Solution 1
// const createMap = string => {
//     const map = {};

//     for (let character of string.replace(/[^\w]/g, '').toLowerCase()) {
//         map[character] = map[character] + 1 || 1;
//     }

//     return map;
// };

// const anagrams = (stringA, stringB) => {
//     const mapA = createMap(stringA);
//     const mapB = createMap(stringB);

//     if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//         return false;
//     }

//     for (let character in mapA) {
//         if (mapA[character] !== mapB[character]) {
//             return false;
//         }
//     }

//     return true;
// };