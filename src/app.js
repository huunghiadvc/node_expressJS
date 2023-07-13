const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect()

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'resources/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views/layouts'));
app.set('layout', '../main');

//route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})