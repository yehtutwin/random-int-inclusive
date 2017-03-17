// Change './index' to 'random-int-inclusive' if you use this code outside of this package
var getRandomIntInclusive = require('./index');

console.log("min\tmax\toutput");
console.log('0\t1\t', getRandomIntInclusive(0, 1));
console.log('0\t1000\t', getRandomIntInclusive(0, 1000));
console.log('10\t1000\t', getRandomIntInclusive(10, 1000));
