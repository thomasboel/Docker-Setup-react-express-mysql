var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/', (req, res, next) => {
  let con = mysql.createConnection({
    host: "sikkerforskning.dk",
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
