
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");

// Create Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDb();

app.use(bodyParser.json());
app.use(cors({
	origin: 'http://44.212.193.143:8080', // Specify the allowed origin
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
}));
app.use(morgan("dev")); // Log HTTP requests

// Serve static files from the frontend build directory
const buildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(buildPath));

// Define API routes
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/product", require("./routes/imageRoutes"));
app.use("/api/data", require("./routes/customizerRoutes"));

// Fallback route to serve the index.html file for all other routes
app.get("*", (req, res) => {
	res.sendFile(path.join(buildPath, "index.html"));
});

// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`.white.bgMagenta);
});
