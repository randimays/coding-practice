// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = string => {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of string) {
        chars[char] = chars[char] + 1 || 1;
    }

    for (let letter in chars) {
        const value = chars[letter];

        if (value > max) {
            max = value;
            maxChar = letter;
        }
    }

    return maxChar;
};

module.exports = maxChar;