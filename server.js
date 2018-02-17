const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8000;

const app = express();

// Serve static content for the app from the "public" directory
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
const routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});
