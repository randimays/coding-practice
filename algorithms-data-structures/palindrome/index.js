// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 2
const palindrome = string => {
    return string.split('').every((char, i) => {
        return char === string[string.length - i - 1];
    });
};

module.exports = palindrome;

// Solution 1 (my solution)
// const palindrome = string => {
//     const reversed = string.split('').reverse().join('');

//     return reversed === string;
// };