const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
name: { type: String , required: true },
description: { type: String , required: true },
price: { type: Number , required: true },
category: { type: String, required: true },
inStock: { type: Boolean, default: true },
});
//creating a Mongoose schema called bookSchema that defines the structure and validation rules for book data in the database.”
const Product = mongoose.model("Product", productSchema);
//creating a Mongoose model called Book using the bookSchema, which will be used to interact with the books collection in MongoDB.”
module.exports = Product;