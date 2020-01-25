const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const apiMapa = express.Router();
const casas = require('./data/db.json');

apiMapa.route('/rutas')

  .get((req, res, next) => {
    res.json(casas);

});

app.use('/api', apiMapa);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
