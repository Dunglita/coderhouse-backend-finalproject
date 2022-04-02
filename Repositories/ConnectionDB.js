const mysql = require(`mysql`);
require("dotenv").config();
const config = require("../Config/Environments");
//Information to connect to MySQL database
const connection = mysql.createConnection({
  host: config.DB.host,
  user: config.DB.user,
  password: config.DB.password,
  database: config.DB.database,
});
//Connection to DB
connection.connect((err) => {
  if (err) throw err;
  console.log(
    `Successfully connected to  ${config.DB.database} MySQL database`
  );
});
module.exports = connection;
