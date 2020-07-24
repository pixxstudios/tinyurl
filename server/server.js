const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
const pass = 'f3!ER7N@GNs66w.';
mongoose.connect( `mongodb://gagan:${encodeURIComponent(pass)}@ds353748.mlab.com:53748/tinyurl`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('open', () => {
    console.log('connected');
});
app.get('/', (req, res) => {
    const tinystr = randomstring.generate(5);
    res.send(`hello ${tinystr}`);
});

const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
    console.log(`listening on http://localhost${PORT}` );
});