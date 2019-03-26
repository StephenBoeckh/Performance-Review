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
  db.Fundlist.findAll()
    .then(fundlists => {
      res.json(fundlists)
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

app.get('/fundlists/company', (req, res) => {
  db.Fundlist.findAll({
    attributes: [[sequelize.fn('DISTINCT', sequelize.col('company')), 'company']]
  })
  .then(company => {
    res.json(company)
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

app.get('/fundlists/:company', (req, res) => {
  const find = req.params.company
  db.Fundlist.findAll({
    where: {company: find}
  })
  .then(companyfunds => {
    res.json(companyfunds)
  })
  .catch(err => {
    res.status(500).json(err);
  });
})

app.get('/individual/:id', (req, res) => {
  const find = req.params.id;
  db.Fundlist.findOne({
    where: {id: find}
  })
  .then(singlefund => {
    res.json(singlefund)
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

app.get('/fundlists/company/:category', (req, res) => {
  const find = req.params.category;
  console.log('categry',find);
  db.Fundlist.findOne({
    where: [{
      category: find,
      company: 'Category Average'
    }],
    
  })
  .then(categoryaverage => {
    res.json(categoryaverage)
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`);
  });