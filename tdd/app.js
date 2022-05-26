const express = require('express');
const app = express();

// parse application/json
app.use(express.json())

app.get("/task", (req, res) => {
  res.status(200)
  .send([]);
})

app.post("/task", (req, res) => {
  const {_id, name} = req.body
  if (!_id || !name) {
    return res.sendStatus(404);
  }
  res.status(201)
  .json(req.body);
}) 

module.exports = app;
