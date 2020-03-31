const faker = require('faker');

const weekday = faker.date.weekday();
const month = faker.date.month();
const pastDate  = faker.date.past()
const futureDtate = faker.date.future();
const recentDate = faker.date.recent();
 

console.log(weekday);
console.log(month);
console.log(pastDate);
console.log(futureDtate);
console.log(recentDate.getHours());
 