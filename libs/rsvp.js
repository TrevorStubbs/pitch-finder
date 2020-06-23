require("dotenv").config();
const express = require("express");
const path = require("path");
require('ejs');
const pg = require('pg');
const app = express();
const DB = process.env.DATABASE_URL;
const client = new pg.Client(DB);
client.on('error', err => console.error(err));
client.connect()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/public',express.static("public"));
app.use(express.urlencoded({
  extended: true
}));


const rsvp = (req,res,next) => {
  let sql = 'SELECT players_going WHERE id = $1;';
  let safe = [req.params.id];
  client.query(sql,safe)
    .then(dbData =>{
      let sql = 'UPDATE games SET players_going = $1 WHERE id = $2;';
      let safe = [dbData.rows[0]+1 ,req.params.id]
      res.redirect(`/events/${req.params.id}`);
    })
}
module.exports = rsvp;