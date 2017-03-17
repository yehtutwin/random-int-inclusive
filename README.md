# random-int-inclusive

A Node.js package that returns random integer between two values inclusive at both the minimum and the maximum.

## Usage

First, install the package using npm:

    npm install random-int-inclusive --save

Then, require the package and use it like so:

    var getRandomIntInclusive = require('random-int-inclusive');

console.log(getRandomIntInclusive(0, 1));  
console.log(getRandomIntInclusive(0, 1000));  
console.log(getRandomIntInclusive(10, 1000));

## License

MIT
