const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');

const app = express();

const host = '127.0.0.1';
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs', exphbs({
  extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  // отправляем ответ
  res.send('<h2>Привет Express!</h2>');
});

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
