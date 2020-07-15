const path = require('path');
const express = require('express');
const webpack = require('webpack');
const logger = require('morgan');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');

const compiler = webpack(config);

const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(`${__dirname}/public`)));

// Setup a default catch-all route that sends back a
// welcome message in JSON format.

app.get('*', (request, response) => {
  response.sendFile(path.resolve(`${__dirname}/public/index.html`));
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('My portfolio listening on port 3000!\n');
});
