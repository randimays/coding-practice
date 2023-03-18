// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = string => {
    let result = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {
        if (string[i - 1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        }
    }

    return result;
};

module.exports = capitalize;

// Solution 1 (my solution)
// const capitalize = string => {
//     const array = string.split(' ');

//     array.forEach((string, index) => {
//         array[index] = string[0].toUpperCase() + string.slice(1);
//     });

//     return array.join(' ');
// };
