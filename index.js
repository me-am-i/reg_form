const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const host = '127.0.0.1';
const port = 3001;

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));

app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
