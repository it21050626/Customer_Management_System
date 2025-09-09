import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import customerRouter from "./routes/customers.js";

const app = express();
const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());

const CONNECTION_URL = "mongodb+srv://rash00:rash00@cluster0.xklbksh.mongodb.net/?retryWrites=true&w=majority";
const URL = process.env.MONGODB_URL;
console.log(CONNECTION_URL);
mongoose.connect(CONNECTION_URL);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection success!");
});

//const customerRouter = require("./routes/customer.js");
app.use("/customer", customerRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
