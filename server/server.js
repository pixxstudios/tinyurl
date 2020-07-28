const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

const TinyUrl = require('./schema');

require('./db.config');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.post('/generatetinyurl', async (req, res) => {
    console.log(req.body.url);
    const tinystr = await randomstring.generate(5);

    const tiny = new TinyUrl({
        url: req.body.url,
        tinyurl: tinystr
    });

    tiny.save().then(response => console.log(response));

    res.send(`hello ${tinystr}`);
});

const PORT = process.env.PORT || 7766;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}` );
});