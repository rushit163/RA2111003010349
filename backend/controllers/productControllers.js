const { getTopProducts } = require('../api/companyProduct'); 
const Product = require('../models/Product');

const productController = {
    async getProducts(req, res) {
        try {
            const { categoryName } = req.params;
            const { maxPrice,minPrice,n,companyName } = req.query;
            let products = await getTopProducts(companyName, categoryName, n, maxPrice,minPrice);
            products = products.map((product, index) => ({
                id: `${product.company}_${index}`,
                ...product
            }));
            const productInstances = products.map(productData => new Product(productData));
            console.log(productInstances)
            res.json(productInstances);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};

module.exports = productController;