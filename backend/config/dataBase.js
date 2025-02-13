const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB Is Connected To The Host :' + con.connection.host);
    })
}

module.exports = connectdb;