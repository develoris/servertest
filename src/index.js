const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// CRUD for public testing
// log all important information about the request
app.use((req, res, next) => {
    console.log('--- Incoming Request ---');
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Params:', req.params);
  console.log('Body:', req.body);
  next();
});

// default route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request received' });
});

app.post('/api/data', (req, res) => {
  res.json({ message: 'POST request received' });
});

app.put('/api/data/:id', (req, res) => {
  res.json({ message: 'PUT request received' });
});

app.delete('/api/data/:id', (req, res) => {
  res.json({ message: 'DELETE request received' });
});
 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});