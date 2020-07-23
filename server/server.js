const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const tinystr = randomstring.generate(5);
    res.send(`hello ${tinystr}`);
});

const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
    console.log(`listening on http://localhost${PORT}` );
});