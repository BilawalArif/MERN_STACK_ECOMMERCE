const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

/// Handling Uncaught Exception

process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("shutting down the server due to an Uncaught Exception ");
  process.exit(1);
});

//Config

dotenv.config({ path: "config/config.env" });
// Connect Database

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`listening on http://localhost:${process.env.PORT}`);
});

// Unhandeled Promise Rejection

process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log(
    "shutting down the server due to an Unhandled Promise Rejection "
  );
  server.close(() => {
    process.exit(1);
  });
});
