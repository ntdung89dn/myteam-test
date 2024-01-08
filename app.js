const express = require('express');
const app = express();
var cors = require('cors')
const timberController = require('./modules/timber/timber.controller');

const port = 3000;

app.use(cors())
app.use(express.json());

app.use("/timber", timberController);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})