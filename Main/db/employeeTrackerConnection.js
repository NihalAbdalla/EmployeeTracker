const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Coding140686',
    database: 'employeeTracker_db',
  });
  
  const afterConnection = () => {
    connection.query('SELECT * FROM songs', (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  };

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    connection.end();
  });
  
  module.exports = connection;
  module.exports = afterConnection;