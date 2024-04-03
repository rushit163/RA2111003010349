const axios = require('axios')

const companyApi = {
    async getTopProducts(companyName,categoryName,minPrice,maxPrice){
        try{
            let apiUrl = `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`
            const response = await axios.get(apiUrl);
            console.log(response.data);
        }catch(e){
            console.log(e);
        }
    }
}