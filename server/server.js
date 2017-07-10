const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');

import {Schema} from './data/schema'

const app = express();

const PORT = process.env.PORT || 3000;

function debug() {
  return process.env.NODE_ENV != 'production';
}

app.use('/', express.static(path.join(__dirname, '../public')));

//dynamic paths
app.get('/hello', function (req, res) {
  res.send('Hello boilerplate world!')
});

//graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  pretty: debug()
}));

//go listen
app.listen(PORT, function () {
  console.log(`Express server listens on port ${PORT}!`)
})