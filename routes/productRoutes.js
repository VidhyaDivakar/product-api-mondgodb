//POST /api/products (Create a Product)
const express = require('express');

const router = express.Router();

const Product = require("../models/Product");

// Create a Product POST /api/products

router.post("/", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

//  Read a Single Product GET /api/products/:id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// (Update a Product) PUT /api/products/:id 
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//  (Delete a Product)  DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// (Read All Products with Advanced Querying) GET /api/products
router.get("/", async (req, res) => {
    try {
        const { category, minPrice, maxPrice, sortBy, page = 1, limit = 10 } = req.query;

        let query = {};

        // filtering
        if (category) query.category = category;

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        let dbQuery = Product.find(query);

        // sorting
        if (sortBy === "price_asc") {
            dbQuery = dbQuery.sort({ price: 1 });
        } else if (sortBy === "price_desc") {
            dbQuery = dbQuery.sort({ price: -1 });
        }

        // pagination
        const skip = (page - 1) * limit;

        dbQuery = dbQuery.skip(skip).limit(Number(limit));

        const products = await dbQuery;

        res.json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
 