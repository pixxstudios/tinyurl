const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('hello');
});

const PORT = process.env.PORT || 3232;

app.listen(PORT, () => {
    console.log(`listening on http://localhost${PORT}` );
});