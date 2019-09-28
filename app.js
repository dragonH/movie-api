const app = require('express')();
const bodyParser = require('body-parser');
const routers = require('./controllers/index.controller');

app.use(bodyParser.json());
app.use(routers);
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).send({ msg: 'Server error' }).end();
  }
});
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = app;
