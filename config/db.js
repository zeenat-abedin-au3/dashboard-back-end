const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log(`Database connection: ${conn.connection.host}`);
};
module.exports = connectDB;
