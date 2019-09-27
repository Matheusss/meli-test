const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const request = require('request');
const app = express();
app.use(bodyParser.json());
app.get('*', cors());

async function getList(req, res) {
   request.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`, (error, response, body) => {
      res.json(JSON.parse(body).results);
   })
};

app.get('/api/items', getList);
app.use(express.static(`${__dirname}/client/dist`));
app.listen(8080);