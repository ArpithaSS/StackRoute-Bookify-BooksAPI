const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/BooksDB");
mongoose.connection
  .once("open", () => {
    console.log("Database connected");
  })
  .on("error", (err) => {
    console.log(err);
  });
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
