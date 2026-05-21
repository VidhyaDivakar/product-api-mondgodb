#### MongoDB Fundamentals

This project is about building a Product API using Node.js, Express, and MongoDB where users can create, update, delete, and view products from the database. The API also supports filtering, sorting, and pagination for products. In this project, I learned how backend APIs work, how routes connect to MongoDB, how Mongoose schemas are used for validation, and how data is stored and retrieved from the database.

In this project, I have used Node.js as the runtime environment, Express.js for creating the server and API routes, MongoDB Atlas as the cloud database, Mongoose for schema creation and database interaction, and dotenv for managing environment variables securely. Postman was used to test all API endpoints.


## Test Steps

1. First run the server using:

   node server.js
2. Make sure the terminal shows: Server running on port 3005MongoDB Connected
3. Open Postman and test the create product route. **POST `http://localhost:3005/api/products`
4. Body → raw → JSON

   ```
   {  "name": "DeskLamp",  "description": "USB Desk lamp",  "price": 22,  "category": "Office Staple",  "inStock": true}
   ```
5. If successful, the product will be saved in MongoDB and the created product object will be returned in the response.
6. To get all products: `GET http://localhost:3005/api/products`
7. To get a single product by ID: `GET http://localhost:3005/api/products/:id`
8. To update a product: `PUT http://localhost:3005/api/products/:id`
9. To delete a product: `DELETE http://localhost:3005/api/products/:id`
10. Query parameters can also be tested for filtering and sorting:` http://localhost:3005/api/products?category=Electronics&sortBy=price_desc`
