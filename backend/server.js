const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const connectDb = require("./config/db");
//rest object
const app = express();
//dot en configuration
dotenv.config();
app.use(bodyParser.json());
//DB connection
connectDb();


app.use(express.json());
const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../frontend/build")
app.use(express.static(buildpath))
//middlewares
app.use(
	cors({
		"origin": "*",
	})
);

app.use(morgan("dev"));

//route

app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use('/api/product', require('./routes/imageRoutes'))
app.use('/api/data', require('./routes/customizerRoutes'))
app.get("/", (req, res) => {
	return res
		.status(200)
		.send("<h1>Welcome to Haze APP API  </h1>");
});

//PORT
const PORT = 8080;

//listen
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`.white.bgMagenta);
});