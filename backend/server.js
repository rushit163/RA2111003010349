const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const axios = require('axios')
dotenv.config()
const app = express();


app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.get('/categories/:categoryName/products', async (req, res) => {
    try {
        const { categoryName } = req.params;
        const { companyName,minPrice, maxPrice } = req.query;
        let apiUrl= `http://20.244.56.144/test/companies/${companyName}/categories/${categoryName}/products?top=${10}&minPriCe=${minPrice}&maxPrice=${maxPrice}`;;
        
        const response = await axios.get(apiUrl, {
            headers: {
              Authorization: {
  token_type: "Bearer",
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5NjQ4LCJpYXQiOjE3MTIxNTkzNDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFhMDU0NjAzLWY1MmItNDBhMC1iYTQ0LTcxZjQwOThmNjFlMSIsInN1YiI6InJoNzIzMkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQ29kZXgiLCJjbGllbnRJRCI6IjFhMDU0NjAzLWY1MmItNDBhMC1iYTQ0LTcxZjQwOThmNjFlMSIsImNsaWVudFNlY3JldCI6IlljWHlDdHZuYkdLUlFHRUsiLCJvd25lck5hbWUiOiJSdXNoaXQiLCJvd25lckVtYWlsIjoicmg3MjMyQHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMDMwMTAzNDkifQ.syVOF6PySYogdYJN5GUjd9T01FryxdGUnCstuem5De8",
  expires_in: 1712159648
}
            }
          });
        console.log(response.data)
        res.json(response.data.products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})