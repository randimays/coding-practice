// You are given a string of characters and you have to write a function
// that decides whether or not the parentheses in the expression are balanced
// "()()()()"  or "(((())))" are good BUT "))))" "())))" ")(" are not acceptable

// Create a counter
// Every time an opening parenthesis is encountered, increment the counter
// Every time a closing parenthesis is encountered, decrement the cuonter
function balancedParens(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) {
  		return previous;
    }

    if (char === '(') {
      return ++previous;
    }

    if (char === ')') {
      return --previous;
    }

    return previous;
  }, 0);
}

balancedParens(')(') // False