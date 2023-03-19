// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Not at all performant!!
const fibonacci = n => {
    if (n < 2) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

module.exports = fibonacci;

// Solution 1 (my solution)
// const fibonacci = (n, series = [], nextIndex = 2) => {
//     if (series[n]) {
//         return series[n];
//     }

//     if (!series.length) {
//         series[0] = 0;
//         series[1] = 1;
//         series[nextIndex] = series[0] + series[1];
//     } else {
//         series[nextIndex] = series[nextIndex - 2] + series[nextIndex - 1];
//     }

//     nextIndex++;
//     return fibonacci(n, series, nextIndex);
// };

// Solution 2
// const fibonacci = n => {
//     const result = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     return result[n];
// };