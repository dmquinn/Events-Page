const path = require("path");
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

const morgan = require("morgan");

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

const folder = path.resolve();

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
