const faker = require('faker');
const fs = require('fs');


function generateUsers() {
        let users = [];
    for (let id = 1; id <= 100; id++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const phone = faker.phone.phoneNumber();
        const email = faker.internet.email();

        users.push({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        });
    }
    return {data:users }
}

const generateDate = generateUsers();
fs.writeFileSync('data.json',JSON.stringify(generateDate,null, '\t'))