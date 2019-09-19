const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/Wk9-Mongo/')));

require('./app/mongoConnect.js')
