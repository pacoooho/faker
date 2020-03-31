const faker = require('faker');

const number = faker.random.number(6);
const uuid = faker.random.uuid();
const image = faker.random.image();
const word  = faker.random.word();
const words = faker.random.words(6, 9);

console.log({uuid});
console.log({image});
console.log({word});
console.log({words});
console.log({number});
