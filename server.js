const express = require('express')
const app = express()

const PORT = process.env.PORT | 3000;

app.get('/', function (req, res) {
  res.send('Hello boilerplate world!')
})

app.listen(PORT, function () {
  console.log(`Express server listens on hard coded port ${PORT}!`)
})