const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use('/', express.static('public'))


//dynamic paths
app.get('/hello', function (req, res) {
  res.send('Hello boilerplate world!')
})

//go listen
app.listen(PORT, function () {
  console.log(`Express server listens on port ${PORT}!`)
})