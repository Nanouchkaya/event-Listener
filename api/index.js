const config = require('dotenv').config(); // Add config to env node.js

if (config.error) throw config.error; // Check if there is no error

const bodyParser = require('body-parser');
const router = require('express').Router();
const server = require('express')();
const App = require('./App');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
server.use(router);

App(server, router);

// Defined a port for the server, if this constant is undefined, the server take the port 3000
server.listen(process.env.PORT || 3000);
