const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handlebars = require('express-handlebars');
const { check, validationResult } = require('express-validator');

const app = express();

const host = '127.0.0.1';
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));

app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/user', [
  check('login', 'Incorrect login').isLength({ min: 3 }),
  check('password', 'Too short password').isLength({ min: 5 }),
], (req, res) => {
  console.log(req.body.login);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }

  return res.json({ success: 'Success' });
});

app.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
