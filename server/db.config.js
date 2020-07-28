const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect( `mongodb://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@ds353748.mlab.com:53748/tinyurl`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('open', () => {
    console.log('connected to database');
});