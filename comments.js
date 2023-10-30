// Create web server

const express = require('express'); // import express
const bodyParser = require('body-parser'); // import body-parser
const path = require('path'); // import path
const app = express(); // create express app
const port = process.env.PORT || 5000; // set port

app.use(bodyParser.urlencoded({ extended: false })); // use body-parser
app.use(bodyParser.json()); // use body-parser

// create web server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// GET /comments
app.get('/comments', (req, res) => {
  // get comments from database
  res.send('GET /comments');
});

// POST /comments
app.post('/comments', (req, res) => {
  // add comment to database
  res.send('POST /comments');
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  // update comment in database
  res.send('PUT /comments/:id');
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  // delete comment from database
  res.send('DELETE /comments/:id');
});