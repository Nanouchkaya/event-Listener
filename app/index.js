const config = require('dotenv').config(); // Add config to env node.js
if (config.error) throw config.error; // Check if there is no error
// console.log('Config :', config.parsed); // Check config

const bodyParser = require('body-parser');
const router = require('express').Router();
const server = require('express')();
const App = require('./App');

// Middlewares
server.use(bodyParser.json())
server.use(router)

// Start application
App(server, router);

// Defined a port for the server, if this constant is undefined, the server take the port 5000 
server.listen(process.env.SERVER_PORT || 3000);
