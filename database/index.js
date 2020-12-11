const mongoose = require('mongoose');

const connectUrl = process.env.MONGODB;
const databaseOptions = {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useFindAndModify: false
}


mongoose.connect(connectUrl, databaseOptions);

module.exports = {
    databaseConnection: mongoose.connection
}