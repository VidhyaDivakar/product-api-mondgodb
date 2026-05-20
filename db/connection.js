const mongoose = require("mongoose");

const connectDB = async () => {
    try{
await mongoose.connect(process.env.DATABASE_URI);
console.log("Mongo DB Connected");
    }catch(error){
        console.log("Mongo Error:", error);
    }
};
    module.exports = connectDB;