const url = 'https://jsonplaceholder.typicode.com/posts123456/';

fetch(url)
    .then(
        response => console.log(response),
        error => console.log('went into the error route'))
    .catch(error => console.log('BAD ', error));