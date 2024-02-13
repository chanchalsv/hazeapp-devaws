const mongoose = require("mongoose");
const colors = require("colors");
//function mmongodb dfatabase connection
const connectDb = async () => {
	try {
		await mongoose.connect("mongodb+srv://haze:12345@cluster0.muj7zwv.mongodb.net/hazeapp");
		console.log(`Connected To Database ${mongoose.connection.host} `.bgWhite);
	} catch (error) {
		console.log("DB Error", error);
	}
};
module.exports = connectDb;