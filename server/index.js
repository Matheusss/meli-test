const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const rp = require('request-promise');
const request = require('request');
const app = express();
app.use(bodyParser.json());
app.get('*', cors());

async function getDetails(req, res) {
   const { id } = req.params
   const endpoint = `https://api.mercadolibre.com/items/${id}`

   try {
      let [details, description] = await Promise.all([
         rp.get((endpoint)),
         rp.get(`${endpoint}/description`)
      ])

      details = JSON.parse(details)
      description = JSON.parse(description)

      res.json({
         author: {},
         item: {
            id: details.id,
            title: details.title,
            price: {
               currency: details.currency_id,
               ammount: details.available_quantity,
               decimals: details.price,
            },
            picture: details.pictures[0].url,
            condition: details.condition,
            free_shiping: details.shipping.free_shipping,
            sold_quantity: details.sold_quantity,
            description: description.plain_text
         }
      })
   } catch(err) {
      console.log(err)
   }
};

function getList(req, res) {
   request.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`, (error, response, body) => {
      const results = JSON.parse(body).results.filter((item,idx) => idx < 4)

      const items = results.map(item => {
         return {
            id: item.id,
            title: item.title,
            price: {
               currency: item.currency_id,
               ammount: item.available_quantity,
               decimals: item.price,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.free
         }
      })

      res.json({
         items,
         data: JSON.parse(body),
      })
   })
};

app.get('/api/items', getList);
app.get('/api/items/:id', getDetails);
app.use(express.static(`${__dirname}/client/dist`));
app.listen(process.env.PORT);