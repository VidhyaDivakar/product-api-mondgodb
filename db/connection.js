const mongoose = require("mongoose");

const connectDB = async () => {
    try{
await mongoose.connect(process.env.DATABASE_URI);
console.log("Mongo DB Connected");
    }catch(error){
        console.log("Mongo Error:", error);
        process.exit(1); // used to start the server when there is an error
    }
};
    module.exports = connectDB;