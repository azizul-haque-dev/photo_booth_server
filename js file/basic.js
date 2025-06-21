const express = require("express");
const app = express();
const handle = require("./handle");
app.locals.title = "my app";
app.get("/", handle);
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data received");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
