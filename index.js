const express = require("express");
require("./config");

const Product = require("./product");
const app = express();
app.use(express.json());

// Post Api With mongoose
app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  // console.log(result)
  console.log(req.body);
  res.send(req.body);
});

// Get Api With Mongoose
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

// Delete Api With Mongoose
app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  console.log(req.params);
  // res.send("Done");
  res.send(data);
});

// Put Api With Mongoose
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(
    req.params, // Condition
    {
      $set: req.body,
    } // $set updated Data
  );
  // console.log(req.params);
  // res.send("Done");
  res.send(data);
});

app.listen(5000);
