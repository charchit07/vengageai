const express = require("express");
const cors=require("cors")
const { connection } = require("./Config/db");
const { contactRouter } = require("./Route/Contact.Route");
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("HOme PAge");
});

app.use("/", contactRouter);

app.listen(7500, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(" Cannot connected to DB");
    console.log(error);
  }
  console.log("Running the server at port 7500");
});
