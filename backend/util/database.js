const mysql = require('mysql2');
const env = require('dotenv').config()

const database = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: process.env.password,
    database: process.env.bdd,
    multipleStatements: true,
  });
  database.connect(function(err){
    if(err){
      throw err;
    }
    else{
    console.log("Connecté à la base de donnée MySQL !")}
  })

  module.exports = database;