var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

router.get('/', (req, res, next) => {
  let con = mysql.createConnection({
    host: "localhost",
    port: "53306",
    user: "site",
    password: "password"
  });

  con.connect((err) => {
    if (err) throw err;
    res.send("Database Connection Succeeded");
  });
});

module.exports = router;
