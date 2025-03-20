const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect1");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dbConnect();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.json({ status: true, message: "Test API" });
});

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
//Start the server
const PORT = process.env.PORT || 7002;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})