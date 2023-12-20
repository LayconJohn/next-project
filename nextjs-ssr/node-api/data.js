const { faker } = require("@faker-js/faker");

const products = [];

for(let i = 1; i <= 100; i++) {
    products.push({
        id: faker.number.int(),
        name: faker.commerce.product(),
        price: faker.number.int(),
        image_url: "https://via.placeholder.com/150/92c952",
        created_at: faker.date.recent()
    },)
}

module.exports = {
    products: products
}