// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3
const reverse = string => {
    return string.split('').reduce((reversed, character) => character + reversed, '');
};

module.exports = reverse;

// Solution 1
// const reverse = string => {
//     return string.split('').reverse().join('');
// };


// Solution 2
// const reverse = string => {
//     let reversed = '';

//     for (let character of string) {
//         reversed = character + reversed;
//     }

//     return reversed;
// };