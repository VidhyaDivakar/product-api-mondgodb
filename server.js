const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
const connectDB = require("./db/connection");
require("dotenv").config();
connectDB();
const productRoutes = require("./routes/productRoutes");
const PORT = 3005;


app.get("/", (req,  res) => {
    console.log("App Connected");
    res.send("Server is running");
})


app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});