import express from "express";

const app = express();

const port = 6969;

app.get("/", (req, res) => {
  res.send("yo");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server is up and running on port ${port}`);
});
