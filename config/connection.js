
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_time_db',
  });
};

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'burger_time_db',
// });

connection.connect(function(err) {
  if (err) {
    console.error('ERROR: ' + err.stack);
    return;
  }
  console.log('Connected to application using ID: ' + connection.threadId);
});

module.exports = connection;
