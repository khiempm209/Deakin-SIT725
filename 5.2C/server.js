var express = require("express")
const mongoose = require('mongoose');
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 3000;

require('./config/db');

const routes = require('./routes/api');

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});