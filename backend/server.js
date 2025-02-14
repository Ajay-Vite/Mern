const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const cors = require('cors')
const dataBase = require('./config/dataBase');
const products = require('./routes/product');
const orders = require('./routes/order');
const app = express();

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

dataBase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.get('/', (req, res, next) => {
    res.send('<h1>REST API USING MERN STACK</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server Is Running On Port : ${process.env.PORT} in ${process.env.NODE_ENV}`);
})