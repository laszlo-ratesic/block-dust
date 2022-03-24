const express = require('express');
const routes = require('./controllers');
// const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 5000;

// Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Turn on Routes
app.use(routes);

// Turn on connection to server
app.listen(PORT, () => console.log(`Now listening @ http://localhost:${PORT}`));