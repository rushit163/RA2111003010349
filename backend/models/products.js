class Product {
    constructor({ id, name, price, rating, company, discount }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.company = company;
        this.discount = discount;
    }
}

module.exports = Product;