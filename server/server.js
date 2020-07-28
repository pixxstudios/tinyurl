const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

require('./db.config');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.post('/generatetinyurl', (req, res) => {
    console.log(req.body.url);
    const tinystr = randomstring.generate(5);
    res.send(`hello ${tinystr}`);
});

const PORT = process.env.PORT || 7766;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}` );
});