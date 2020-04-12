const express = require("express");

const app = express();

const userRouter = require("./routes/user");
const errorHandler = require("./middlewares/error");

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Requiring db
const connectDB = require("./config/db");

app.use("/user", userRouter);

// Error Middleware
app.use(errorHandler);

// connect db
connectDB();

// Start Server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhanlded promise error
process.on("unhandledRejection", (err, response) => {
  console.error(`Error:  ${err.message}`.inverse.red);
  // exit process
  server.close(() => process.exit(1));
});
