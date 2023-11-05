const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'phonenumbers',
  password: '14092003',
  port: 5432,
});

app.use(bodyParser.json());

const queries = require('./queries.js')(pool);

app.get('/users', queries.getUsers);
app.get('/users/:id', queries.getUserById);
app.post('/users', queries.createUser);
app.put('/users/:id', queries.updateUser);
app.delete('/users/:id', queries.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
