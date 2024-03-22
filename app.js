import express from 'express';
import factorialService from './factorial.js';
import authorizationService from './authorization.js'

const app = express();

// Middleware for authorization (assuming a header 'X-Username')
app.use((req, res, next) => {
  const username = req.headers['x-username'];
  if (!username || !authorizationService.isAuthorized(username)) {
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

  const result = factorialService.calculateFactorial(number);
  res.json({ factorial: result });
});

module.exports = app;