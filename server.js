const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = require("./db/connection");
require("dotenv").config();
connectDB();
const PORT = 3005;




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});