const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("We Have Success");
    } catch (error) {
        console.log(error);
    }
};

connection();

// connections file will always be the same untill mongoose change there libary 