const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello boilerplate world!')
})

app.listen(3000, function () {
  console.log('Express server listens on hard coded port 3000!')
})