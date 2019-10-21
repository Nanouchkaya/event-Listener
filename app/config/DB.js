const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'eventlistener',
  password: 'eventlistener',
  database: 'event_listener',
});

connection.connect((error) => {
  if (error) {
    console.error(`Database connection : ${error}`)
  }
});

module.exports = connection;
