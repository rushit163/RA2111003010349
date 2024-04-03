const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')


dotenv.config()
const app = express();


app.use(express.json());
app.use('/categories', productRoutes);
app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})