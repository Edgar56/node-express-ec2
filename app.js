import express from 'express';
import {calculateFactorial} from './factorial.js';
import {isAuthorized} from './authorization.js'

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Middleware for authorization (assuming a header 'X-Username')
app.use((req, res, next) => {
  const username = req.headers['x-username'];
  if (!username || !isAuthorized(username)) {
    return res.status(401).send('Unauthorized');
  }
  next();
});

// Endpoint for calculating factorial (can be further customized)
app.get('/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    return res.status(400).send('Invalid number');
  }

  const result = calculateFactorial(number);
  res.json({ factorial: result });
});
