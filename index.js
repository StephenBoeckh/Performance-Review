const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  Sequelize = require('sequelize'),
  cors = require('cors');

const sequelize  = new Sequelize('funds', 'root', 'root', {
  dialect: 'mysql',
  host: "localhost",
  port: 3306
});


const db = require('./models');


const PORT = 8080;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json());

app.get('/fundlists', (req, res) => {
  db.fundlists.findAll()
    .then(fundlists => {
      res.json(fundlists)
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`);
  });