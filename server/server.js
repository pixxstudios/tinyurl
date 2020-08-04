const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const cors = require('cors');

const TinyUrl = require('./schema');

require('./db.config');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.post('/generatetinyurl', async (req, res) => {
    console.log('generatetinyurl  >> ', req.body);

    const tinystr = await randomstring.generate(5);

    const tiny = new TinyUrl({
        url: req.body.url,
        tinyurl: tinystr
    });

    tiny.save().then(response => console.log(response));

    res.send(`hello ${tinystr}`);
});

app.get('/:tinyurl', (req, res) => {
    const tinyurl = req.params.tinyurl;
    console.log(req.params.tinyurl);

    if (req.params.tinyurl === undefined) {
        res.json({
            message: "Please send the tiny url"
        });
    }
    TinyUrl.findOne({
        tinyurl
    }).then(response => {
        console.log(response);
        if (response) {
            res.redirect(302, `http://${response.url}`);
        }
    });
});

app.get('/', (req, res) => {
    res.send('Invalid path for now...');
});

const PORT = process.env.PORT || 7766;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}` );
});