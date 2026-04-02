const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// CRUD for public testing
// log all important information about the request
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((req, res, next) => {
    console.log('--- Incoming Request ---');
  console.log(`${req.method} ${req.url}`);
  console.log('Headers:', req.headers);
  console.log('Query:', req.query);
  console.log('Params:', req.params);
  console.log('Body:', req.body);
  next();
});
const generateLogObject = (req) => {
    console.log('body', req.body);
  return {
    method: req.method,
    url: req.url,
    headers: req.headers,
    query: req.query,
    params: req.params,
    body: req.body
  };
}
// default route for testing
app.get('/', (req, res) => {
    const logObject = generateLogObject(req);
  res.send('Hello World!');
});
app.get('/api/data', (req, res) => {
  const logObject = generateLogObject(req);
  res.json({ message: 'GET request received', log: logObject });
});

app.post('/api/data', (req, res) => {
  const logObject = generateLogObject(req);
  res.json({ message: 'POST request received', log: logObject });
});

app.put('/api/data/:id', (req, res) => {
  const logObject = generateLogObject(req);
  res.json({ message: 'PUT request received', log: logObject });
});

app.delete('/api/data/:id', (req, res) => {
  const logObject = generateLogObject(req);
  res.json({ message: 'DELETE request received', log: logObject });
});
 

app.listen(port, () => {
  setInterval(()=>{
    console.log('--- Server is alive ---');
  }, 1000 * 60 * 2); // log every 2 minutes
  console.log(`Server is running on port ${port}`);
});