const mongoose = require("mongoose");
require('dotenv').config();

function connectDB()  {
    mongoose.connect(process.env.MONGO_URL, {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
}

module.exports = connectDB;